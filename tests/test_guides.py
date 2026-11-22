"""Static checks for the published guide pages: local links, anchors, ids and Pages coverage."""

import html
from html.parser import HTMLParser
import json
from pathlib import Path
import posixpath
import re
import struct
import unittest
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(path.name for path in ROOT.glob("*.html"))
EXTERNAL = ("http://", "https://", "mailto:", "data:", "javascript:")
# Every guide exists in Korean and in English (*.en.html). The header switch of a page lists the guides of its own language.
SWITCH_ORDERS = {"ko": ["index.html", "operator.html"], "en": ["index.en.html", "operator.en.html"]}
SWITCH_ORDER = SWITCH_ORDERS["ko"] + SWITCH_ORDERS["en"]
HANGUL = re.compile(r"[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3]")
# Text that the intro cards, overview table and static lab references must contain, per language.
PHRASES = {
    "ko": {"official": "공식 문서", "run": "직접 실행", "no_run": "직접 실행하지 않음", "why": "왜 실습하지 않나",
           "connect": "Foundry 연결", "try": "해 보려면", "iq_table": "Microsoft IQ의 컨텍스트 기능과 이 가이드의 범위",
           "lab": "실습 {n}",
           "json_label": "워크샵 JSON 설정 예시", "settings_label": "설정 값의 의미"},
    "en": {"official": "Official docs", "run": "Run directly", "no_run": "Not run directly", "why": "Why there is no lab",
           "connect": "Connecting to Foundry", "try": "To try it", "iq_table": "Microsoft IQ context capabilities and the scope of this guide",
           "lab": "Lab {n}",
           "json_label": "Workshop JSON config example", "settings_label": "Meaning of the settings"},
}
GUIDES = {"ko": ("index.html", "operator.html"), "en": ("index.en.html", "operator.en.html")}
# The operator handoff template spells out absolute Pages URLs. Keep this in step with the published repository.
SITE_URL = "https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/"
SITE_HOST = urlsplit(SITE_URL).netloc
# The guides were imported from this repository; nothing should still point back at it.
SOURCE_REPOSITORY = "internal-guest-hands-on-guide"


def language_of(name: str) -> str:
    return "en" if name.endswith(".en.html") else "ko"


def counterpart(name: str) -> str:
    """The same guide in the other language (index.html <-> index.en.html)."""
    return name.replace(".en.html", ".html") if language_of(name) == "en" else name.replace(".html", ".en.html")


def data_file(kind: str, lang: str) -> str:
    """assets/guide-data.js, assets/labs-data.js, assets/ignite/ignite-data.js and their .en.js editions."""
    path = {"guide": "assets/guide-data.js", "labs": "assets/labs-data.js", "ignite": "assets/ignite/ignite-data.js"}[kind]
    return path if lang == "ko" else path[:-3] + ".en.js"


def load_data(kind: str, lang: str = "ko") -> dict:
    variable = {"guide": "GUIDE_DATA", "labs": "LABS_DATA", "ignite": "IGNITE_DATA"}[kind]
    text = (ROOT / data_file(kind, lang)).read_text(encoding="utf-8")
    return json.loads(re.fullmatch(rf"window\.{variable} = (.*?);?\s*", text, re.S).group(1))


def mp4_seconds(path: Path) -> float:
    """Duration from the movie header box, so the test needs no ffprobe."""
    data = path.read_bytes()
    position = data.find(b"mvhd")
    version = data[position + 4]
    if version == 1:
        timescale, duration = struct.unpack(">IQ", data[position + 24:position + 36])
    else:
        timescale, duration = struct.unpack(">II", data[position + 16:position + 24])
    return duration / timescale


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids: list[str] = []
        self.links: list[str] = []
        self.pre_labels: list[str | None] = []
        self.switch_links: list[tuple[str, bool]] = []
        self.lang_links: list[tuple[str | None, str | None, str | None]] = []
        self.alternates: dict[str | None, str | None] = {}
        self.html_lang: str | None = None
        self.scripts: list[str] = []
        self.toc_targets: list[str] = []
        self.observed_sections: list[str] = []
        self.ignite_sections: list[tuple[str, bool, str, str]] = []
        self.ignite_galleries: list[str] = []
        self.signature: list[tuple] = []
        self._in_switch = False
        self._in_lang = False
        self._in_toc = False

    # Attributes that carry visible text (translated in the English edition) or that the English edition rewrites on purpose.
    DISPLAY_ATTRS = {"alt", "title", "aria-label", "placeholder", "content", "data-ignite-nav", "data-ignite-title", "data-ignite-label"}

    @staticmethod
    def korean_form(value: str) -> str:
        """Map a reference of the English edition back to its Korean counterpart so both editions can be compared."""
        for english, korean in ((".en.html", ".html"), (".en.js", ".js"), (".en.mp4", ".mp4"), ("captions.en.vtt", "captions.ko.vtt"),
                                ("foundry-iq-sample/en/", "foundry-iq-sample/"), (".en.json", ".json"), (".en.txt", ".txt")):
            value = value.replace(english, korean)
        return value

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "html":
            self.html_lang = attributes.get("lang")
        elif not (tag == "link" and attributes.get("rel") == "alternate"):
            kept = tuple(sorted(
                (name, self.korean_form(value or "") if name in {"href", "src", "poster"} else value)
                for name, value in attrs if name not in self.DISPLAY_ATTRS and not (name == "aria-current" and value == "true")))
            self.signature.append((tag, kept))
        if tag == "link" and attributes.get("rel") == "alternate":
            self.alternates[attributes.get("hreflang")] = attributes.get("href")
        if "id" in attributes:
            self.ids.append(attributes["id"])
            if "observed-section" in (attributes.get("class") or "").split():
                self.observed_sections.append(attributes["id"])
        if "data-ignite-nav" in attributes:
            observed = "observed-section" in (attributes.get("class") or "").split()
            self.ignite_sections.append((attributes.get("id", ""), observed, attributes["data-ignite-nav"], attributes.get("data-ignite-title", "")))
        if "data-ignite-gallery" in attributes:
            self.ignite_galleries.append(attributes["data-ignite-gallery"])
        if tag == "nav" and attributes.get("class") == "guide-switch":
            self._in_switch = True
        if tag == "nav" and attributes.get("class") == "lang-switch":
            self._in_lang = True
        if tag == "nav" and attributes.get("id") == "toc":
            self._in_toc = True
        if tag in {"a", "link"} and attributes.get("href"):
            self.links.append(attributes["href"])
            if self._in_switch and tag == "a":
                self.switch_links.append((attributes["href"], attributes.get("aria-current") == "page"))
            if self._in_lang and tag == "a":
                self.lang_links.append((attributes["href"], attributes.get("hreflang"), attributes.get("aria-current")))
            if self._in_toc and tag == "a" and attributes["href"].startswith("#"):
                self.toc_targets.append(attributes["href"][1:])
        for name in ("src", "poster"):
            if tag in {"img", "script", "source", "video"} and attributes.get(name):
                self.links.append(attributes[name])
        if tag == "script" and attributes.get("src"):
            self.scripts.append(attributes["src"])
        if tag == "pre":
            self.pre_labels.append(attributes.get("aria-label"))

    def handle_endtag(self, tag):
        if tag == "nav":
            self._in_switch = False
            self._in_lang = False
            self._in_toc = False


def parse(name: str) -> tuple[PageParser, str]:
    text = (ROOT / name).read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(text)
    return parser, text


def dynamic_ids(text: str) -> set[str]:
    """Ids that the page scripts create at load time (index.html builds its step sections)."""
    stages = {f"step-{stage}" for stage in re.findall(r'\{id:"([a-z-]+)",title:', text)}
    lab_ids = set()
    if "assets/labs.js" in text:
        labs = [lab for lab in LabMapTests.load()["labs"] if lab["enabled"]]
        lab_ids = {f"lab-{number}" for number in range(1, len(labs) + 1)}
    return stages | set(re.findall(r'\.id = "([\w-]+)"', text)) | lab_ids


def known_ids(name: str) -> set[str]:
    parser, text = parse(name)
    return set(parser.ids) | dynamic_ids(text)


class GuidePageTests(unittest.TestCase):
    def test_both_guides_exist(self):
        self.assertEqual(sorted(SWITCH_ORDER), PAGES)

    def test_ids_are_unique_and_pre_blocks_have_copy_labels(self):
        for name in PAGES:
            parser, _ = parse(name)
            duplicates = {value for value in parser.ids if parser.ids.count(value) > 1}
            self.assertFalse(duplicates, f"{name}: duplicate ids {sorted(duplicates)}")
            self.assertTrue(all(parser.pre_labels), f"{name}: every <pre> needs an aria-label for its copy button")

    def test_local_links_and_anchors_resolve(self):
        known = {name: known_ids(name) for name in PAGES}
        problems = []
        for name in PAGES:
            for link in parse(name)[0].links:
                if link.startswith(EXTERNAL):
                    continue
                parts = urlsplit(link)
                # Links are relative to the page, which may sit in a subfolder.
                target = posixpath.normpath(posixpath.join(posixpath.dirname(name), unquote(parts.path))) if parts.path else name
                if not (ROOT / target).is_file():
                    problems.append(f"{name}: missing file {link}")
                elif parts.fragment and target in known and unquote(parts.fragment) not in known[target]:
                    problems.append(f"{name}: missing anchor {link}")
        self.assertEqual([], problems)

    def test_each_page_has_the_same_guide_switch_and_shared_scripts(self):
        for name in PAGES:
            parser, _ = parse(name)
            self.assertEqual(SWITCH_ORDERS[language_of(name)], [href for href, _ in parser.switch_links], name)
            self.assertEqual([name], [href for href, current in parser.switch_links if current], name)
            for script in ("assets/i18n.js", "assets/theme.js", "assets/navigation.js", "assets/copy.js"):
                self.assertIn(script, parser.scripts, f"{name} must load {script}")
            self.assertLess(parser.scripts.index("assets/i18n.js"), parser.scripts.index("assets/theme.js"), f"{name}: i18n.js must load first")

    def test_language_switch_links_each_guide_to_its_other_edition(self):
        for name in PAGES:
            lang, other = language_of(name), counterpart(name)
            parser, _ = parse(name)
            self.assertEqual(lang, parser.html_lang, f"{name}: <html lang>")
            pair = [name, other] if lang == "ko" else [other, name]
            self.assertEqual(pair, [href for href, _, _ in parser.lang_links], f"{name}: language switch targets")
            self.assertEqual(["ko", "en"], [hreflang for _, hreflang, _ in parser.lang_links], name)
            self.assertEqual([lang], [hreflang for _, hreflang, current in parser.lang_links if current == "true"], f"{name}: current language")
            alternates = {key: value for key, value in parser.alternates.items()}
            self.assertEqual({"ko", "en", "x-default"}, set(alternates), name)
            korean, english = (name, other) if lang == "ko" else (other, name)
            self.assertEqual(SITE_URL + (korean if korean != "index.html" else ""), alternates["ko"], name)
            self.assertEqual(SITE_URL + english, alternates["en"], name)
            self.assertEqual(alternates["ko"], alternates["x-default"], name)

    def test_triage_tables_let_the_symptom_column_wrap(self):
        # td:first-child is nowrap by default, so a long symptom sentence stretched these tables far past their container.
        css = (ROOT / "assets" / "guide.css").read_text(encoding="utf-8")
        self.assertRegex(css, r"\.table-triage td:first-child\{[^}]*white-space:normal")
        for lang in ("ko", "en"):
            text = parse(GUIDES[lang][0])[1]
            for section in ("troubleshooting", "ignite-troubleshooting"):
                block = re.search(rf'<section[^>]*id="{section}"[^>]*>(.*?)</section>', text, re.S).group(1)
                self.assertIn('class="table-wide table-triage"', block, f"{lang}: the {section} table must use table-triage")

    def test_english_guide_has_the_structure_of_the_korean_guide(self):
        # The English pages are translations: same elements in the same order, same ids, classes, data-* values and links.
        # A poster may point at the English run's screenshot of the same step (screenshots/en/<same file name>).
        def plain(item):
            if isinstance(item, str):
                return item.replace("screenshots/en/", "screenshots/")
            if isinstance(item, (tuple, list)):
                return type(item)(plain(part) for part in item)
            return item

        for korean, english in zip(GUIDES["ko"], GUIDES["en"]):
            ko_signature, en_signature = parse(korean)[0].signature, parse(english)[0].signature
            for index, (ko_item, en_item) in enumerate(zip(ko_signature, en_signature)):
                self.assertEqual(ko_item, plain(en_item), f"{english}: element #{index} differs from {korean}")
            self.assertEqual(len(ko_signature), len(en_signature), f"{english}: element count differs from {korean}")

    def test_english_pages_and_assets_contain_no_hangul(self):
        files = [path for path in ROOT.glob("*.en.html")]
        files += [path for path in (ROOT / "assets").rglob("*") if path.is_file() and (".en." in path.name or "/en/" in path.as_posix())
                  and path.suffix in {".js", ".json", ".md", ".txt", ".vtt", ".html", ".css"}]
        files += [ROOT / "README.md"]
        self.assertGreaterEqual(len(files), 6)
        problems = [str(path.relative_to(ROOT)) for path in files if HANGUL.search(path.read_text(encoding="utf-8"))]
        self.assertEqual([], problems)

    def test_operator_sidebar_lists_every_section_in_order(self):
        # navigation.js highlights the sidebar link whose target is an observed section.
        # index.html is left out: it builds part of its sidebar and sections with script.
        parser, _ = parse("operator.html")
        self.assertEqual(parser.observed_sections, parser.toc_targets, "operator.html: sidebar and sections differ")

    def test_absolute_links_to_this_site_resolve(self):
        # The handoff template links to the published pages by absolute URL, so a rename would go unnoticed otherwise.
        problems = []
        for name in PAGES:
            for url in re.findall(rf"https://{re.escape(SITE_HOST)}/[^\s\"'<>]*", parse(name)[1]):
                if not url.startswith(SITE_URL):
                    problems.append(f"{name}: {url} is not under {SITE_URL}")
                    continue
                parts = urlsplit(url)
                page = posixpath.basename(parts.path) or "index.html"
                if page not in PAGES:
                    problems.append(f"{name}: {url} points at a page that does not exist")
                elif parts.fragment and unquote(parts.fragment) not in known_ids(page):
                    problems.append(f"{name}: {url} points at a missing anchor")
        self.assertEqual([], problems)

    def test_nothing_points_back_at_the_source_repository(self):
        files = [*(ROOT / name for name in PAGES), *(ROOT / "assets").rglob("*.js"),
                 *(ROOT / "scripts").glob("*.py"), *(ROOT / "config").glob("*.json")]
        stale = [path.name for path in files if SOURCE_REPOSITORY in path.read_text(encoding="utf-8")]
        self.assertEqual([], stale)

    def test_pages_workflow_publishes_every_guide(self):
        workflow = (ROOT / ".github" / "workflows" / "pages.yml").read_text(encoding="utf-8")
        copy_line = next(line for line in workflow.splitlines() if line.strip().startswith("cp index.html"))
        for name in PAGES:
            self.assertIn(f"test -s {name}", workflow)
            self.assertIn(name, copy_line)
        for video in ("summary-walkthrough.en.mp4", "full-walkthrough.en.mp4"):
            self.assertIn(f"test -s assets/video/{video}", workflow)

    def test_operator_example_matches_the_example_config(self):
        # The operator guide shows config/workshop.example.json as a JSON block and as a settings table. A value changed in one place must change in all of them.
        config = json.loads((ROOT / "config" / "workshop.example.json").read_text(encoding="utf-8"))
        for name in GUIDES["ko"][1:] + GUIDES["en"][1:]:
            phrases = PHRASES[language_of(name)]
            text = parse(name)[1]
            block = re.search(rf'<pre[^>]*aria-label="{re.escape(phrases["json_label"])}">(.*?)</pre>', text, re.S)
            table = re.search(rf'<table aria-label="{re.escape(phrases["settings_label"])}">(.*?)</table>', text, re.S)
            self.assertTrue(block and table, f"{name}: JSON example or settings table not found")
            self.assertEqual(config, json.loads(html.unescape(block.group(1))), f"{name}: JSON example differs from config/workshop.example.json")
            rows = {key: value for key, value in re.findall(r"<tr><td><code>(\w+)</code></td><td><code>([^<]*)</code></td>", table.group(1))}
            self.assertIn("location", rows)
            expected = {key: (json.dumps(config.get(key)) if isinstance(config.get(key), bool) else str(config.get(key))) for key in rows}
            self.assertEqual(expected, rows, f"{name}: settings table differs from config/workshop.example.json")


class GuideDataTests(unittest.TestCase):
    """index.html renders its screens and video chapters from assets/guide-data.js (index.en.html: guide-data.en.js), so the data and the files must agree."""

    @staticmethod
    def load(lang="ko"):
        return load_data("guide", lang)

    def test_captured_screens_and_video_exist(self):
        for lang in ("ko", "en"):
            data = self.load(lang)
            files = [shot["image"] for shot in data["shots"]] + [data["recording"]["video"]]
            self.assertEqual([], [name for name in files if not (ROOT / name).is_file()], lang)

    def test_page_expects_the_number_of_captured_screens(self):
        for lang in ("ko", "en"):
            expected = int(re.search(r"data\.shots\.length !== (\d+)", parse(GUIDES[lang][0])[1]).group(1))
            self.assertEqual(expected, len(self.load(lang)["shots"]), lang)

    def test_english_guide_data_mirrors_the_korean(self):
        ko, en = self.load("ko"), self.load("en")
        self.assertEqual("en", en.get("locale", "en"))
        for key in ("section", "width", "height"):
            self.assertEqual([shot.get(key) for shot in ko["shots"]], [shot.get(key) for shot in en["shots"]], key)
        self.assertEqual([shot["id"] for shot in ko["shots"]], [shot["id"] for shot in en["shots"]])
        self.assertEqual([len(shot["hotspots"]) for shot in ko["shots"]], [len(shot["hotspots"]) for shot in en["shots"]])
        self.assertEqual([chapter["id"] for chapter in ko["chapters"]], [chapter["id"] for chapter in en["chapters"]])
        self.assertEqual(sorted(ko["monitorMetrics"]), sorted(en["monitorMetrics"]))
        self.assertEqual(sorted(ko["lab"]), sorted(en["lab"]))

    def test_english_video_captions_and_timestamps_fit_the_videos(self):
        data = self.load("en")
        video = ROOT / data["recording"]["video"]
        self.assertTrue(video.name.endswith(".en.mp4"), video.name)
        summary = ROOT / "assets" / "video" / "summary-walkthrough.en.mp4"
        self.assertTrue(summary.is_file() and (ROOT / "assets" / "video" / "captions.en.vtt").is_file())
        length = mp4_seconds(video)
        self.assertAlmostEqual(length, data["recording"]["nativeDurationSeconds"], delta=1.5)
        latest = max([shot["videoSeconds"] for shot in data["shots"] if "videoSeconds" in shot] + [item["videoSeconds"] for item in data["chapters"]])
        self.assertLess(latest, length)
        self.assertLessEqual(max(cue["end"] for cue in data["videoCues"]), length + 0.5)
        self.assertGreater(mp4_seconds(summary), 60)
        self.assertLessEqual(video.stat().st_size + summary.stat().st_size, 100 * 1024 * 1024, "English videos must stay inside the GitHub size guidance")


class IntroCardTests(unittest.TestCase):
    def test_introduction_cards_distinguish_unverified_features_from_labs(self):
        for lang in ("ko", "en"):
            with self.subTest(lang=lang):
                self.check_cards(lang)

    def check_cards(self, lang):
        phrases = PHRASES[lang]
        text = parse(GUIDES[lang][0])[1]
        section = re.search(r'<section[^>]*id="ignite-learn-more"[^>]*>(.*?)</section>', text, re.S)
        self.assertIsNotNone(section)
        tiers = {
            "B": ("copilot-sdk", "voice-agents", "business-plugins", "m365-accounts-for-agents", "toolbox",
                  "foundry-mcp-server", "foundry-safety", "training", "new-models", "azure-windows", "cost-management"),
            "C": ("foundry-iq", "web-iq", "work-iq", "fabric-iq", "hosted-agents"),
        }
        official_hosts = {"learn.microsoft.com", "azure.microsoft.com", "news.microsoft.com", "techcommunity.microsoft.com", "commandline.microsoft.com", "aka.ms"}
        self.assertEqual(sum(map(len, tiers.values())), len(re.findall(r'<article\b', section.group(1))))
        for tier, keys in tiers.items():
            for key in keys:
                with self.subTest(card=key):
                    cards = re.findall(rf'<article[^>]*id="learn-{key}"[^>]*data-tier="{tier}"[^>]*>(.*?)</article>', section.group(1), re.S)
                    self.assertEqual(1, len(cards))
                    card = cards[0]
                    for field in ("intro-status", "verification-badge", phrases["official"]):
                        self.assertIn(field, card)
                    links = re.findall(r'href="(https://[^"]+)"', card)
                    self.assertTrue(2 <= len(links) <= 4, key)
                    self.assertTrue(all(
                        urlsplit(link).netloc in official_hosts
                        or link.startswith("https://github.com/microsoft/copilot-sdk/")
                        for link in links
                    ), key)
                    if tier == "C":
                        # Cards for features with a lab say so and point at the lab; the lab itself holds the evidence.
                        self.assertIn(phrases["run"], card)
                        self.assertRegex(card, r'data-lab-ref="lab:[a-z-]+"')
                        continue
                    self.assertIn(phrases["why"], card)
                    self.assertIn(phrases["no_run"], card)
                    if tier == "A":
                        for field in (phrases["connect"], phrases["try"]):
                            self.assertIn(field, card)
                        self.assertRegex(card, r'href="https://learn\.microsoft\.com/')
                        self.assertGreaterEqual(len(re.findall(r"<li>", card)), 3)

    def test_overview_separates_iq_context_from_foundry_improvement(self):
        for lang in ("ko", "en"):
            phrases = PHRASES[lang]
            text = parse(GUIDES[lang][0])[1]
            table = re.search(rf'<table[^>]*aria-label="{re.escape(phrases["iq_table"])}"[^>]*>(.*?)</table>', text, re.S).group(1)
            rows = re.findall(r"<tr>(.*?)</tr>", table, re.S)
            for name, key in (("Foundry IQ", "foundry-iq"), ("Web IQ", "web-iq"), ("Work IQ", "work-iq"), ("Fabric IQ", "fabric-iq")):
                matches = [row for row in rows if re.search(rf"<td><strong>{name}</strong></td>", row)]
                self.assertEqual(1, len(matches), f"{lang} {name}")
                self.assertIn(f'href="#learn-{key}"', matches[0])
            row = next(row for row in rows if 'href="#learn-foundry-iq"' in row)
            self.assertIn('data-lab-ref="lab:foundry-iq"', row, "Foundry IQ links to its lab from the overview")
            self.assertIn("Business plugins", table)
            improvement = text.split('id="ignite-foundry-improvement"', 1)[1].split('id="ignite-at-a-glance"', 1)[0]
            for section in ("ignite-insights", "ignite-evaluation", "ignite-optimize"):
                link = f'href="#{section}"'
                self.assertNotIn(link, table, f"{lang}: Foundry improvement is not an IQ context capability")
                self.assertIn(link, improvement, f"{lang}: the separate Foundry overview links to {section}")

    def test_lab_7_is_the_portal_first_web_iq_lab_run_directly_with_screens_for_every_portal_step(self):
        # Lab 7 (lab key web-iq) is the Web IQ lab: Azure portal -> Web IQ portal -> Foundry portal, with no CLI.
        # Its Web IQ steps (7-1 to 7-4) and the built-in Web search comparison (7-5) were all run directly and have screens.
        # Learn: the Azure Web IQ resource only meters and bills; apps call api.microsoft.ai directly.
        expected = {
            "ko": {"description": "날씨", "service_ga": "모든 Azure 고객에게 GA", "weather": "Weather는 Auto로 제공", "wrong": "리소스 호출", "required": "필수 실습",
                   "glance": "Microsoft IQ와 실습별 한눈에 보기", "check": "Foundry 기능의 포털 표시와 Ignite 발표·공식 자료 대조",
                   "ran": "직접 실행해 확인했습니다", "no_cli": "CLI·터미널·코드는 쓰지 않습니다", "docs": "공식 문서 기준"},
            "en": {"description": "weather", "service_ga": "GA for all Azure customers", "weather": "delivered through Auto", "wrong": "Azure resource directly", "required": "Required lab",
                   "glance": "Microsoft IQ and each lab at a glance",
                   "check": "Foundry features as shown in the portal, checked against Ignite announcements and official sources",
                   "ran": "were run directly", "no_cli": "You use no CLI, terminal or code", "docs": "Based on official docs"},
        }

        def lab7_cells(grid):
            row = next(row for row in re.findall(r"<tr>(.*?)</tr>", grid, re.S) if 'data-lab-ref="lab:web-iq"' in row.split("</td>", 1)[0])
            return re.findall(r"<td>(.*?)</td>", row, re.S)
        for lang in ("ko", "en"):
            words = expected[lang]
            text = parse(GUIDES[lang][0])[1]
            self.assertNotIn("web-iq-api", text, f"{lang}: the separate direct-call lab was merged into Lab 7")
            table = re.search(rf'<table[^>]*aria-label="{re.escape(PHRASES[lang]["iq_table"])}"[^>]*>(.*?)</table>', text, re.S).group(1)
            row = next(row for row in re.findall(r"<tr>(.*?)</tr>", table, re.S) if "<strong>Web IQ</strong>" in row)
            cells = re.findall(r"<td>(.*?)</td>", row, re.S)
            self.assertIn(words["description"], cells[1], f"{lang}: the description covers the weather source the status lists")
            self.assertIn(words["service_ga"], cells[2], f"{lang}: the service-level status comes first")
            self.assertIn(words["weather"], cells[2], f"{lang}: Weather has no dedicated API")
            self.assertNotIn(words["wrong"], row)
            self.assertIn(words["required"], cells[3], f"{lang}: Lab 7 is the required Web IQ lab")
            self.assertIn('data-lab-ref="lab:web-iq"', cells[3])
            card = re.search(r'<article[^>]*id="learn-web-iq"[^>]*data-tier="C"[^>]*>(.*?)</article>', text, re.S)
            self.assertIsNotNone(card, f"{lang}: the Web IQ card is a concept card tied to Lab 7")
            card = card.group(1)
            badge = re.search(r'<span class="verification-badge">(.*?)</span>', card).group(1)
            self.assertIn(PHRASES[lang]["run"], badge, f"{lang}: the Web IQ card says Lab 7 was run directly")
            self.assertNotIn(words["docs"], badge, f"{lang}: the Web IQ steps no longer rest on official docs alone")
            self.assertNotIn(PHRASES[lang]["no_run"], badge)
            self.assertIn('data-lab-ref="lab:web-iq"', card)
            # The lab itself: portal screens only, with what was observed spelled out.
            lab = re.search(r'<section[^>]*id="ignite-web-iq"[^>]*>(.*?)</section>', text, re.S).group(1)
            opening = lab.split("<h3", 1)[0]
            self.assertIn("api.microsoft.ai", opening.split("<ol", 1)[0], f"{lang}: Lab 7 says apps call the API directly")
            self.assertIn(words["no_cli"], opening)
            self.assertIn(words["ran"], opening)
            self.assertNotIn(words["docs"], opening, f"{lang}: the opening no longer says the steps rest on official docs")
            self.assertIn('data-lab-ref="sec:ignite-web-iq-compare"', opening, f"{lang}: the fallback without a Web IQ resource is named up front")
            for portal in ("https://portal.azure.com", "https://webiq.microsoft.ai"):
                self.assertIn(f'href="{portal}"', lab, f"{lang}: Lab 7 walks through {portal}")
            for observed in ("AuthInvalidApiKey", "Delete failed", "execute_tool mcp_WebIQ.web", "Go to resource", "Add Azure Resource"):
                self.assertIn(observed, lab, f"{lang}: Lab 7 records what the Azure run showed ({observed})")
            self.assertEqual(["ignite-web-iq-instructions", "ignite-web-iq-question"], re.findall(r'<pre id="([^"]+)"', lab),
                             f"{lang}: Lab 7 has no code or command blocks besides the two prompts")
            self.assertNotRegex(lab, r"\b(curl|az\s+\w+|export\s+\w+=)", f"{lang}: Lab 7 uses no CLI commands")
            steps = [section for step in next(item for item in LabMapTests.load(lang)["labs"] if item["key"] == "web-iq")["steps"] for section in step]
            self.assertEqual(steps, re.findall(r'<h3[^>]*id="([^"]+)"', lab), f"{lang}: the steps follow the lab map in order")
            self.assertEqual(["ignite-web-iq-resource", "ignite-web-iq-portal", "ignite-web-iq-add", "ignite-web-iq-test", "ignite-web-iq-compare", "ignite-web-iq-compare"],
                             re.findall(r'data-lab-gallery="([^"]+)"', lab), f"{lang}: every portal step has its screens, and 7-5 keeps two galleries")
            shots = IgnitePart2Tests.load(lang)["shots"]
            counts = {group: sum(shot["group"] == group for shot in shots) for group in ("web-iq-resource", "web-iq-portal", "web-iq-add", "web-iq-test")}
            self.assertEqual({"web-iq-resource": 7, "web-iq-portal": 4, "web-iq-add": 6, "web-iq-test": 4}, counts, f"{lang}: screens per Web IQ step")
            # Elsewhere, Web IQ is one of the required labs and each table row states which part was run.
            flow = re.search(r'<ol class="flow iq-flow"[^>]*>(.*?)</ol>', text, re.S).group(1)
            chip = next(li for li in re.findall(r"<li>(.*?)</li>", flow, re.S) if "Microsoft IQ" in li)
            parts = chip.split("scope-badge")
            self.assertIn("Web IQ", parts[0], f"{lang}: the required labs of the roadmap include Web IQ")
            self.assertIn("Work IQ", parts[1], f"{lang}: Work IQ follows as the optional Lab 8")
            self.assertIn("Fabric IQ", parts[2], f"{lang}: Fabric IQ follows as the optional Lab 9")
            glance = lab7_cells(re.search(rf'<table[^>]*aria-label="{re.escape(words["glance"])}"[^>]*>(.*?)</table>', text, re.S).group(1))
            self.assertNotIn(PHRASES[lang]["no_run"].lower(), glance[2].lower(), f"{lang}: no Web IQ step is left unrun")
            self.assertIn(PHRASES[lang]["run"].lower(), glance[2].lower(), f"{lang}: the Web IQ steps and the built-in comparison are run")
            self.assertIn("Web IQ", glance[4], f"{lang}: the announcement column carries the Web IQ service status")
            check = lab7_cells(re.search(rf'<table[^>]*aria-label="{re.escape(words["check"])}"[^>]*>(.*?)</table>', text, re.S).group(1))
            self.assertIn("Book of News", check[2], f"{lang}: the Web IQ service announcement is in the Lab 7 row")
            self.assertNotIn(PHRASES[lang]["no_run"].lower(), check[1].lower(), f"{lang}: the Web IQ resource, portal and tool were run")
            self.assertIn(PHRASES[lang]["run"].lower(), check[1].lower())

    def test_foundry_iq_and_web_iq_are_required_labs_with_sample_and_galleries(self):
        data = LabMapTests.load()
        labs = [lab for lab in data["labs"] if lab["enabled"]]
        keys = [lab["key"] for lab in labs]
        self.assertEqual(["foundry-iq", "web-iq"], keys[keys.index("observe") + 1:keys.index("observe") + 3])
        for key in ("foundry-iq", "web-iq"):
            lab = labs[keys.index(key)]
            self.assertTrue(lab["required"], key)
            self.assertTrue(lab["sections"] and lab["steps"], key)
        # Every required lab comes before every optional one.
        flags = [lab["required"] for lab in labs]
        self.assertEqual(sorted(flags, reverse=True), flags)
        for lang in ("ko", "en"):
            parser, text = parse(GUIDES[lang][0])
            shots = IgnitePart2Tests.load(lang)["shots"]
            for prefix in ("foundry-iq", "web-iq"):
                self.assertTrue(any(group.startswith(prefix) for group in parser.ignite_galleries), prefix)
                self.assertTrue(any(shot["group"].startswith(prefix) for shot in shots), prefix)
            folder = "assets/foundry-iq-sample" if lang == "ko" else "assets/foundry-iq-sample/en"
            sample = sorted(path.name for path in (ROOT / folder).glob("*.md"))
            self.assertGreaterEqual(len(sample), 3)
            for name in sample:
                self.assertIn(f"{folder}/{name}", text, f"the {lang} lab must link the sample document {name}")
            card = re.search(r'<article[^>]*id="learn-foundry-iq"[^>]*>(.*?)</article>', text, re.S).group(1)
            self.assertNotIn(PHRASES[lang]["no_run"], card)
        self.assertEqual(sorted(path.name for path in (ROOT / "assets" / "foundry-iq-sample").glob("*.md")),
                         sorted(path.name for path in (ROOT / "assets" / "foundry-iq-sample" / "en").glob("*.md")), "English sample documents mirror the Korean ones")

    def test_hosted_agent_and_cost_are_optional_labs_with_operator_assets(self):
        data = LabMapTests.load()
        labs = {lab["key"]: lab for lab in data["labs"] if lab["enabled"]}
        for key in ("hosted-agent", "cost"):
            self.assertFalse(labs[key]["required"], key)
            self.assertTrue(labs[key]["steps"], key)
        for lang in ("ko", "en"):
            parser, _ = parse(GUIDES[lang][0])
            shots = IgnitePart2Tests.load(lang)["shots"]
            for prefix in ("hosted", "cost"):
                self.assertTrue(any(group.startswith(prefix) for group in parser.ignite_galleries), prefix)
                self.assertTrue(any(shot["group"].startswith(prefix) for shot in shots), prefix)
        for name in ("main.py", "requirements.txt", "metadata.json"):
            self.assertTrue((ROOT / "assets" / "hosted-agent-sample" / name).is_file(), name)
        self.assertTrue((ROOT / "scripts" / "deploy_hosted_agent.sh").is_file())
        self.assertIn("deploy_hosted_agent.sh", (ROOT / ".github" / "workflows" / "pages.yml").read_text(encoding="utf-8"))

    def check_run_iq_lab(self, lang, spec):
        """Labs 8 and 9 were run directly (2026-11-22): they are optional labs with captured screens, a concept card tied to the lab and operator preparation."""
        lab_map = LabMapTests.load(lang)
        labs = [lab for lab in lab_map["labs"] if lab["enabled"]]
        keys = [lab["key"] for lab in labs]
        self.assertEqual(spec["key"], keys[keys.index(spec["after"]) + 1], f"the {spec['key']} lab comes right after the {spec['after']} lab")
        lab = labs[keys.index(spec["key"])]
        self.assertFalse(lab["required"], "the tenant-level setup puts the lab outside the required labs")
        self.assertEqual(["agent", "observe"], lab["prerequisites"])
        self.assertEqual([[step] for step in spec["steps"]], lab["steps"])
        self.assertIn(spec["key"], lab["more"])
        self.assertEqual(1, len(lab["screens"]))
        badge_text = lab["screens"][0]
        self.assertIn("2026-11-22", badge_text)
        self.assertIn(str(sum(spec["counts"].values())), badge_text, "the evidence badge states the number of captured screens")
        self.assertNotIn(PHRASES[lang]["no_run"].lower(), badge_text.lower())
        text = parse(GUIDES[lang][0])[1]
        section = re.search(rf'<section[^>]*id="{spec["section"]}"[^>]*>(.*?)</section>', text, re.S).group(1)
        self.assertIn(spec["ran"], section)
        self.assertNotIn(spec["not_run"], section, "the lab no longer says it was not run")
        self.assertIn("2026-11-22" if lang == "en" else "2026.11.22", section)
        self.assertEqual([step for steps in lab["steps"] for step in steps], re.findall(r'<h3[^>]*id="([^"]+)"', section), "the steps follow the lab map in order")
        self.assertEqual(spec["pres"], re.findall(r'<pre id="([^"]+)"', section))
        self.assertEqual(spec["galleries"], re.findall(r'data-lab-gallery="([^"]+)"', section), "every step with screens has its galleries in order")
        shots = IgnitePart2Tests.load(lang)["shots"]
        prefix = spec["key"].split("-")[0] + "-iq"
        counts = {group: sum(shot["group"] == group for shot in shots) for group in spec["counts"]}
        self.assertEqual(spec["counts"], counts, f"{lang}: screens per step")
        self.assertEqual(sum(spec["counts"].values()), sum(shot["group"].startswith(prefix) for shot in shots))
        for needle in spec["needles"]:
            self.assertIn(needle, section)
        self.assertNotRegex(section, r"\b(curl|az\s+\w+|azd\s+\w+)\b", "the participant steps use no CLI")
        # The concept card, the overview rows and the troubleshooting table label the lab as run and point to it.
        card = re.search(rf'<article[^>]*id="learn-{spec["key"]}"[^>]*data-tier="C"[^>]*>(.*?)</article>', text, re.S)
        self.assertIsNotNone(card, "the card is a concept card tied to the lab")
        card = card.group(1)
        badge = re.search(r'<span class="verification-badge">(.*?)</span>', card).group(1)
        self.assertIn(PHRASES[lang]["run"], badge)
        self.assertNotIn(PHRASES[lang]["no_run"], badge)
        self.assertIn(f'data-lab-ref="lab:{spec["key"]}"', card)
        iq_table = re.search(rf'<table[^>]*aria-label="{re.escape(PHRASES[lang]["iq_table"])}"[^>]*>(.*?)</table>', text, re.S).group(1)
        row = next(row for row in re.findall(r"<tr>(.*?)</tr>", iq_table, re.S) if f"<strong>{spec['name']}</strong>" in row)
        self.assertIn(f'data-lab-ref="lab:{spec["key"]}"', row)
        glance = re.search(rf'<table[^>]*aria-label="{re.escape(spec["glance"])}"[^>]*>(.*?)</table>', text, re.S).group(1)
        row = next(row for row in re.findall(r"<tr>(.*?)</tr>", glance, re.S) if f'data-lab-ref="lab:{spec["key"]}"' in row.split("</td>", 1)[0])
        cell = re.findall(r"<td>(.*?)</td>", row, re.S)[2].lower()
        self.assertIn(PHRASES[lang]["run"].lower(), cell)
        self.assertNotIn(PHRASES[lang]["no_run"].lower(), cell)
        troubleshooting = re.search(r'<section[^>]*id="ignite-troubleshooting"[^>]*>(.*?)</section>', text, re.S).group(1)
        self.assertIn(f'scope="colgroup">{spec["group"]}', troubleshooting)
        operator = parse(GUIDES[lang][1])[1]
        block = operator.split(f'id="{spec["prep"]}"', 1)[1].split(f'id="{spec["prep_end"]}"', 1)[0]
        for needle in spec["operator"]:
            self.assertIn(needle, block, f"the operator preparation names {needle}")

    def test_fabric_iq_is_an_optional_lab_run_directly_right_after_work_iq(self):
        # Lab 9 (lab key fabric-iq) was run in Azure and Fabric on 2026-11-22 with an F2 capacity and Member test accounts: 23 screens.
        words = {
            "ko": {"ran": "직접 실행했습니다", "not_run": "직접 실행하지 않았습니다", "glance": "Microsoft IQ와 실습별 한눈에 보기", "group": "Fabric IQ (실습 9"},
            "en": {"ran": "were run directly", "not_run": "We did not run this lab", "glance": "Microsoft IQ and each lab at a glance", "group": "Fabric IQ (Lab 9"},
        }
        for lang in ("ko", "en"):
            with self.subTest(lang=lang):
                self.check_run_iq_lab(lang, {
                    "key": "fabric-iq", "after": "work-iq", "name": "Fabric IQ", "section": "ignite-fabric-iq", "prep": "fabric-iq-prep", "prep_end": "hosted-prep",
                    "steps": ["ignite-fabric-iq-connect", "ignite-fabric-iq-add", "ignite-fabric-iq-test"],
                    "pres": ["ignite-fabric-iq-instructions", "ignite-fabric-iq-q1", "ignite-fabric-iq-q2", "ignite-fabric-iq-q3"],
                    "galleries": ["ignite-fabric-iq-connect", "ignite-fabric-iq-connect", "ignite-fabric-iq-add", "ignite-fabric-iq-test", "ignite-fabric-iq-test"],
                    "counts": {"fabric-iq-prep": 10, "fabric-iq-connect": 4, "fabric-iq-add": 2, "fabric-iq-answer": 3, "fabric-iq-traces": 4},
                    "needles": ["Fabric IQ (OneLake Catalog)", "Semantic model", "tool_user_error", "analyze_lakehouse_tables", "Foundry Project Manager", "dimproductsubcategory"],
                    "operator": ["Item.Execute.All", "DataAgent.Execute.All", "UserEntraToken", "Foundry Project Manager", "F2", "fcignitelab01"],
                    **words[lang],
                })

    def test_work_iq_is_an_optional_lab_run_directly_right_after_web_iq(self):
        # Lab 8 (lab key work-iq) was run on 2026-11-22 with Member test accounts: 17 screens. Guest participant accounts get empty results.
        words = {
            "ko": {"ran": "직접 실행했습니다", "not_run": "직접 실행하지 않았습니다", "glance": "Microsoft IQ와 실습별 한눈에 보기", "group": "Work IQ (실습 8",
                   "only_ask": "<code>ask</code> 하나만"},
            "en": {"ran": "were run directly", "not_run": "We did not run this lab", "glance": "Microsoft IQ and each lab at a glance", "group": "Work IQ (Lab 8",
                   "only_ask": "<code>ask</code> only"},
        }
        for lang in ("ko", "en"):
            with self.subTest(lang=lang):
                word = words[lang]
                self.check_run_iq_lab(lang, {
                    "key": "work-iq", "after": "web-iq", "name": "Work IQ", "section": "ignite-work-iq", "prep": "work-iq-prep", "prep_end": "fabric-iq-prep",
                    "steps": ["ignite-work-iq-connect", "ignite-work-iq-add", "ignite-work-iq-test"],
                    "pres": ["ignite-work-iq-instructions", "ignite-work-iq-q1", "ignite-work-iq-q2", "ignite-work-iq-q3"],
                    "galleries": ["ignite-work-iq-connect", "ignite-work-iq-add", "ignite-work-iq-test", "ignite-work-iq-test", "ignite-work-iq-test"],
                    "counts": {"work-iq-connect": 4, "work-iq-add": 5, "work-iq-consent": 3, "work-iq-answer": 3, "work-iq-traces": 2},
                    "needles": ["https://workiq.svc.cloud.microsoft/mcp", "WorkIQAgent.Ask", "oauth_consent_request", "Approve once", "UTC", "execute_tool mcp_WorkIQMCP.ask",
                                "Restricted: Project Falcon budget approval", word["only_ask"]],
                    "operator": ["fdcc1f02-fc51-4226-8753-f668596af7f7", "WorkIQAgent.Ask", "Copilot Credits", "Foundry Project Manager", "Restricted: Project Falcon budget approval"],
                    **{key: value for key, value in word.items() if key != "only_ask"},
                })


class LabMapTests(unittest.TestCase):
    @staticmethod
    def load(lang="ko"):
        return load_data("labs", lang)

    def test_english_lab_map_mirrors_the_korean(self):
        ko, en = self.load("ko"), self.load("en")
        for key in ("before", "after"):
            self.assertEqual([item["id"] for item in ko[key]], [item["id"] for item in en[key]], key)
        self.assertEqual(sorted(ko["cards"]), sorted(en["cards"]))
        self.assertEqual(len(ko["labs"]), len(en["labs"]))
        for ko_lab, en_lab in zip(ko["labs"], en["labs"]):
            for key in ("key", "enabled", "required", "prerequisites", "sections", "steps", "more"):
                self.assertEqual(ko_lab[key], en_lab[key], f"{ko_lab['key']}.{key}")
            self.assertEqual(len(ko_lab["screens"]), len(en_lab["screens"]), ko_lab["key"])

    def test_lab_map_preserves_sections_and_prerequisite_order(self):
        for lang in ("ko", "en"):
            with self.subTest(lang=lang):
                self.check_lab_map(lang)

    def check_lab_map(self, lang):
        data = self.load(lang)
        labs = [lab for lab in data["labs"] if lab["enabled"]]
        numbers = {lab["key"]: i + 1 for i, lab in enumerate(labs)}
        self.assertEqual(list(range(1, len(labs) + 1)), list(numbers.values()))
        assigned = [section for lab in labs for section in lab["sections"]]
        self.assertEqual(len(assigned), len(set(assigned)), "each section belongs to one lab")
        original = {
            "first-sign-in", "responsibilities", "model-quota", "ignite-guardrails",
            "ignite-foundry-iq", "ignite-web-iq", "ignite-work-iq", "ignite-fabric-iq",
            "ignite-start", "ignite-harness", "ignite-observe", "ignite-improve",
            "ignite-insights", "ignite-evaluator", "ignite-evaluation", "ignite-optimize",
            "ignite-hosted-agent", "ignite-fleet", "ignite-cost",
        } | {f"step-{chapter['id']}" for chapter in GuideDataTests.load(lang)["chapters"] if chapter["id"] != "monitoring-setup"}
        self.assertEqual(original, set(assigned))
        existing = known_ids(GUIDES[lang][0])
        for lab in labs:
            with self.subTest(lab=lab["key"]):
                self.assertTrue(lab["screens"] and lab["lead"])
                self.assertTrue(set(lab["sections"]) <= existing)
                self.assertTrue({section for step in lab["steps"] for section in step} <= existing)
                self.assertTrue(all(numbers[key] < numbers[lab["key"]] for key in lab["prerequisites"]))
                self.assertTrue(all(f"learn-{key}" in existing and key in data["cards"] for key in lab["more"]))
        common = [item["id"] for item in data["before"] + data["after"]]
        self.assertEqual(len(common), len(set(common)))
        self.assertFalse(set(common) & set(assigned))
        self.assertTrue(set(common) <= existing)

    def test_static_references_match_computed_numbers(self):
        for lang in ("ko", "en"):
            labs = [lab for lab in self.load(lang)["labs"] if lab["enabled"]]
            numbers = {f"lab:{lab['key']}": str(i + 1) for i, lab in enumerate(labs)}
            numbers.update({f"sec:{section}": f"{i + 1}-{step + 1}" for i, lab in enumerate(labs)
                            for step, sections in enumerate(lab["steps"]) for section in sections})
            refs = re.findall(r'<a[^>]*data-lab-ref="([^"]+)"[^>]*>(.*?)</a>', parse(GUIDES[lang][0])[1], re.S)
            self.assertTrue(refs, "the guide must use computed references instead of hard-coded optional lab numbers")
            for key, text in refs:
                self.assertIn(key, numbers)
                self.assertEqual(PHRASES[lang]["lab"].format(n=numbers[key]), html.unescape(text), f"{lang} {key}")

    def test_microsoft_iq_is_first_in_the_overview_and_official_table(self):
        for lang in ("ko", "en"):
            text = parse(GUIDES[lang][0])[1]
            self.assertLess(text.index('id="ignite-microsoft-iq"'), text.index('id="ignite-at-a-glance"'))
            table = text[text.index('id="ignite-official-check"'):]
            first_row = re.search(r"<tbody>\s*<tr>(.*?)</tr>", table, re.S).group(1)
            self.assertIn("<strong>Microsoft IQ</strong>", first_row)

    def test_renamed_products_state_their_lineage(self):
        expected = {
            "ko": ("Azure AI Search", "GitHub Copilot SDK", "GitHub Copilot 하네스", "microsoft_copilot_preview", "github_copilot_preview"),
            "en": ("Azure AI Search", "GitHub Copilot SDK", "GitHub Copilot harness", "microsoft_copilot_preview", "github_copilot_preview"),
        }
        for lang in ("ko", "en"):
            text = parse(GUIDES[lang][0])[1]
            block = text.split('id="ignite-renamed"', 1)[1].split('id="ignite-at-a-glance"', 1)[0]
            for phrase in expected[lang]:
                self.assertIn(phrase, block, f"{lang}: the rename table must mention {phrase}")
            card = re.search(r'<article[^>]*id="learn-foundry-iq"[^>]*>(.*?)</article>', text, re.S).group(1)
            self.assertIn('href="#ignite-renamed"', card, f"{lang}: the Foundry IQ card points at the rename table")
            lab = text.split('id="ignite-foundry-iq"', 1)[1].split('id="ignite-foundry-iq-prep"', 1)[0]
            self.assertIn('href="#ignite-renamed"', lab, f"{lang}: the Lab 6 intro points at the rename table")

    def test_reference_guides_hold_connection_methods_and_github_updates(self):
        for lang in ("ko", "en"):
            text = parse(GUIDES[lang][0])[1]
            self.assertEqual("ignite-reference-guides", self.load(lang)["after"][-1]["id"])
            section = re.search(r'<section[^>]*id="ignite-reference-guides"[^>]*>(.*?)</section>', text, re.S).group(1)
            for ref in ("ref-work-iq", "ref-fabric-iq", "ref-copilot-sdk", "ref-github-copilot"):
                self.assertIn(f'id="{ref}"', section, f"{lang}: {ref}")
            for card, ref in (("work-iq", "ref-work-iq"), ("fabric-iq", "ref-fabric-iq")):
                body = re.search(rf'<article[^>]*id="learn-{card}"[^>]*>(.*?)</article>', text, re.S).group(1)
                self.assertIn(f'href="#{ref}"', body, f"{lang}: the {card} card links to its reference guide")
            self.assertNotIn("verification-badge", section, "reference guides are not verified labs")

    def test_web_iq_is_one_required_portal_lab_and_the_operator_prepares_it_in_the_portal(self):
        # The optional "call Web IQ directly" lab (REST and curl) was merged into Lab 7, so the lab list ends with the cost lab.
        for lang in ("ko", "en"):
            labs = [lab for lab in self.load(lang)["labs"] if lab["enabled"]]
            self.assertEqual("cost", labs[-1]["key"])
            self.assertNotIn("web-iq-api", [lab["key"] for lab in labs])
            lab = next(lab for lab in labs if lab["key"] == "web-iq")
            self.assertTrue(lab["required"])
            self.assertEqual(["agent", "observe"], lab["prerequisites"])
            self.assertEqual(len(lab["screens"]), 2, "one badge for the captured Web IQ steps and one for the captured comparison")
        for name in GUIDES["ko"][1:] + GUIDES["en"][1:]:
            text = parse(name)[1]
            self.assertNotIn("iq-prep-web-api", text)
            block = text.split('id="iq-prep-web"', 1)[1].split('<div class="notice warning">', 1)[0]
            for needle in ("Microsoft.WebIQ", "Resource providers", "Cost analysis"):
                self.assertIn(needle, block, f"{name}: the Web IQ preparation names {needle}")
            self.assertNotRegex(block, r"\baz\s+\w+", f"{name}: the Web IQ preparation is done in the portal, not with the CLI")

    def test_all_observed_sections_belong_to_the_lab_or_common_flow(self):
        for lang in ("ko", "en"):
            data = self.load(lang)
            common = {item["id"] for item in data["before"] + data["after"]}
            labs = {section for lab in data["labs"] if lab["enabled"] for section in lab["sections"]}
            parser, text = parse(GUIDES[lang][0])
            observed = set(parser.observed_sections) | {value for value in dynamic_ids(text) if value.startswith("step-")}
            self.assertEqual(observed, common | labs)
            self.assertIn("<body data-labs>", text)

    def test_published_sources_do_not_show_legacy_part_or_n_labels(self):
        paths = list(ROOT.glob("*.html")) + list((ROOT / "assets").glob("*.js"))
        paths += [ROOT / "assets" / "ignite" / "ignite-data.js", ROOT / "assets" / "ignite" / "ignite-data.en.js",
                  ROOT / "README.md", ROOT / "README.ko.md"]
        for path in paths:
            with self.subTest(path=path.relative_to(ROOT)):
                self.assertNotRegex(path.read_text(encoding="utf-8"), r"\bPART\s*[12]\b|\bN[1-8]\b")


class IgnitePart2Tests(unittest.TestCase):
    """New Foundry capture data, screenshots and gallery placeholders must agree."""

    SHOT_KEYS = {"id", "group", "title", "action", "expected", "image", "width", "height", "hotspots"}

    @staticmethod
    def load(lang="ko"):
        return load_data("ignite", lang)

    def test_every_screenshot_has_an_entry_and_the_numbering_is_sequential(self):
        screens = ROOT / "assets" / "ignite" / "screenshots"
        used = {}
        for lang in ("ko", "en"):
            shots = self.load(lang)["shots"]
            self.assertEqual([], [shot["image"] for shot in shots if not (ROOT / shot["image"]).is_file()], lang)
            # Numbers are consecutive from 1 and written with at least two digits (99, 100, ... once the list passes 99 screens).
            self.assertEqual([f"{number:02d}" for number in range(1, len(shots) + 1)], [shot["id"].split("-", 1)[0] for shot in shots])
            self.assertTrue(all(self.SHOT_KEYS <= shot.keys() for shot in shots))
            used[lang] = {shot["image"] for shot in shots}
        # The Korean edition owns the ko/ folder; the English edition reuses its screens unless the screen showed Korean input (those live in en/).
        on_disk = sorted(path.name for path in (screens / "ko").glob("*.png"))
        self.assertEqual(sorted(Path(image).name for image in used["ko"]), on_disk)
        english_only = sorted(path.name for path in (screens / "en").glob("*.png"))
        self.assertEqual(english_only, sorted(Path(image).name for image in used["en"] if "/screenshots/en/" in image))
        self.assertTrue(all(image.startswith(("assets/ignite/screenshots/ko/", "assets/ignite/screenshots/en/")) for image in used["en"]))

    def test_english_screens_mirror_the_korean_ones(self):
        ko, en = self.load("ko")["shots"], self.load("en")["shots"]
        self.assertEqual([shot["id"] for shot in ko], [shot["id"] for shot in en])
        self.assertEqual([shot["group"] for shot in ko], [shot["group"] for shot in en])
        # A placeholder ("English screenshot in preparation") replaces a screen that cannot be re-captured; its highlight describes the placeholder.
        placeholders = {shot["id"] for shot in en if shot.get("placeholder")}
        for shot in en:
            if shot["id"] in placeholders:
                self.assertIn("/en/", shot["image"], shot["id"])
        counts = lambda shots: [len(shot["hotspots"]) for shot in shots if shot["id"] not in placeholders]
        self.assertEqual(counts(ko), counts(en))
        boxes = lambda shot: [(box["x"], box["y"], box["width"], box["height"]) for box in shot["hotspots"]]
        for ko_shot, en_shot in zip(ko, en):
            if en_shot["image"] == ko_shot["image"]:
                self.assertEqual(boxes(ko_shot), boxes(en_shot), f"{ko_shot['id']}: a reused screen keeps its highlight positions")

    def test_screens_are_1600_by_900_and_hotspots_stay_inside_the_image(self):
        for lang in ("ko", "en"):
            for shot in self.load(lang)["shots"]:
                width, height = struct.unpack(">II", (ROOT / shot["image"]).read_bytes()[16:24])
                self.assertEqual((1600, 900), (width, height), shot["id"])
                self.assertEqual((width, height), (shot["width"], shot["height"]), shot["id"])
                self.assertTrue(shot["hotspots"], f"{shot['id']}: needs at least one hotspot")
                for box in shot["hotspots"]:
                    self.assertTrue(box["label"], shot["id"])
                    inside = box["x"] >= 0 and box["y"] >= 0 and box["width"] > 0 and box["height"] > 0
                    inside = inside and box["x"] + box["width"] <= width and box["y"] + box["height"] <= height
                    self.assertTrue(inside, f"{shot['id']}: hotspot {box['label']!r} leaves the image")

    def test_every_screen_group_has_exactly_one_gallery_placeholder(self):
        for lang in ("ko", "en"):
            groups = sorted({shot["group"] for shot in self.load(lang)["shots"]})
            self.assertEqual(groups, sorted(parse(GUIDES[lang][0])[0].ignite_galleries))

    def test_part2_sections_feed_the_sidebar_and_are_observed(self):
        for lang in ("ko", "en"):
            parser, _ = parse(GUIDES[lang][0])
            self.assertTrue(parser.ignite_sections, f"{GUIDES[lang][0]} needs data-ignite-nav sections for PART 2")
            for section_id, observed, badge, title in parser.ignite_sections:
                self.assertTrue(section_id.startswith("ignite-"), section_id)
                self.assertTrue(observed, f"{section_id} must be an observed-section so the sidebar highlights it")
                self.assertTrue(badge and title, f"{section_id} needs a sidebar badge and title")
            badges = [badge for _, _, badge, _ in parser.ignite_sections]
            self.assertEqual(len(badges), len(set(badges)), "sidebar badges must be unique")

    def test_part2_scripts_load_data_before_renderer_and_before_navigation(self):
        for lang in ("ko", "en"):
            scripts = parse(GUIDES[lang][0])[0].scripts
            names = (data_file("ignite", lang), "assets/ignite-part2.js", data_file("labs", lang), "assets/labs.js", "assets/navigation.js")
            order = [scripts.index(name) for name in names]
            self.assertEqual(sorted(order), order)
            self.assertIn(data_file("guide", lang), scripts)


if __name__ == "__main__":
    unittest.main()
