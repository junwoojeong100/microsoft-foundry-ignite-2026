"""Static checks for the published guide pages: local links, anchors, ids and Pages coverage."""

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
SWITCH_ORDER = ["index.html", "operator.html"]
# The operator handoff template spells out absolute Pages URLs. Keep this in step with the published repository.
SITE_URL = "https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/"
SITE_HOST = urlsplit(SITE_URL).netloc
# The guides were imported from this repository; nothing should still point back at it.
SOURCE_REPOSITORY = "internal-guest-hands-on-guide"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids: list[str] = []
        self.links: list[str] = []
        self.pre_labels: list[str | None] = []
        self.switch_links: list[tuple[str, bool]] = []
        self.scripts: list[str] = []
        self.toc_targets: list[str] = []
        self.observed_sections: list[str] = []
        self.ignite_sections: list[tuple[str, bool, str, str]] = []
        self.ignite_galleries: list[str] = []
        self._in_switch = False
        self._in_toc = False

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
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
        if tag == "nav" and attributes.get("id") == "toc":
            self._in_toc = True
        if tag in {"a", "link"} and attributes.get("href"):
            self.links.append(attributes["href"])
            if self._in_switch and tag == "a":
                self.switch_links.append((attributes["href"], attributes.get("aria-current") == "page"))
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
            self._in_toc = False


def parse(name: str) -> tuple[PageParser, str]:
    text = (ROOT / name).read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(text)
    return parser, text


def dynamic_ids(text: str) -> set[str]:
    """Ids that the page scripts create at load time (index.html builds its step sections)."""
    stages = {f"step-{stage}" for stage in re.findall(r'\{id:"([a-z-]+)",title:', text)}
    return stages | set(re.findall(r'\.id = "([\w-]+)"', text))


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
            self.assertEqual(SWITCH_ORDER, [href for href, _ in parser.switch_links], name)
            self.assertEqual([name], [href for href, current in parser.switch_links if current], name)
            for script in ("assets/theme.js", "assets/navigation.js", "assets/copy.js"):
                self.assertIn(script, parser.scripts, f"{name} must load {script}")

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


class GuideDataTests(unittest.TestCase):
    """index.html renders its screens and video chapters from assets/guide-data.js, so the data and the files must agree."""

    @staticmethod
    def load():
        text = (ROOT / "assets" / "guide-data.js").read_text(encoding="utf-8")
        return json.loads(re.fullmatch(r"window\.GUIDE_DATA = (.*?);?\s*", text, re.S).group(1))

    def test_captured_screens_and_video_exist(self):
        data = self.load()
        files = [shot["image"] for shot in data["shots"]] + [data["recording"]["video"]]
        self.assertEqual([], [name for name in files if not (ROOT / name).is_file()])

    def test_page_expects_the_number_of_captured_screens(self):
        expected = int(re.search(r"data\.shots\.length !== (\d+)", parse("index.html")[1]).group(1))
        self.assertEqual(expected, len(self.load()["shots"]))


class IgnitePart2Tests(unittest.TestCase):
    """PART 2 renders its screens from assets/ignite/ignite-data.js, so data, screenshots and page placeholders must agree."""

    SHOT_KEYS = {"id", "group", "title", "action", "expected", "image", "width", "height", "hotspots"}

    @staticmethod
    def load():
        text = (ROOT / "assets" / "ignite" / "ignite-data.js").read_text(encoding="utf-8")
        return json.loads(re.fullmatch(r"window\.IGNITE_DATA = (.*?);?\s*", text, re.S).group(1))

    def test_every_screenshot_has_an_entry_and_the_numbering_is_sequential(self):
        shots = self.load()["shots"]
        self.assertEqual([], [shot["image"] for shot in shots if not (ROOT / shot["image"]).is_file()])
        self.assertEqual([f"{number:02d}" for number in range(1, len(shots) + 1)], [shot["id"][:2] for shot in shots])
        on_disk = sorted(path.name for path in (ROOT / "assets" / "ignite" / "screenshots" / "ko").glob("*.png"))
        self.assertEqual(sorted(Path(shot["image"]).name for shot in shots), on_disk)
        self.assertTrue(all(self.SHOT_KEYS <= shot.keys() for shot in shots))

    def test_screens_are_1600_by_900_and_hotspots_stay_inside_the_image(self):
        for shot in self.load()["shots"]:
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
        groups = sorted({shot["group"] for shot in self.load()["shots"]})
        self.assertEqual(groups, sorted(parse("index.html")[0].ignite_galleries))

    def test_part2_sections_feed_the_sidebar_and_are_observed(self):
        parser, _ = parse("index.html")
        self.assertTrue(parser.ignite_sections, "index.html needs data-ignite-nav sections for PART 2")
        for section_id, observed, badge, title in parser.ignite_sections:
            self.assertTrue(section_id.startswith("ignite-"), section_id)
            self.assertTrue(observed, f"{section_id} must be an observed-section so the sidebar highlights it")
            self.assertTrue(badge and title, f"{section_id} needs a sidebar badge and title")
        badges = [badge for _, _, badge, _ in parser.ignite_sections]
        self.assertEqual(len(badges), len(set(badges)), "sidebar badges must be unique")

    def test_part2_scripts_load_data_before_renderer_and_before_navigation(self):
        scripts = parse("index.html")[0].scripts
        order = [scripts.index(name) for name in ("assets/ignite/ignite-data.js", "assets/ignite-part2.js", "assets/navigation.js")]
        self.assertEqual(sorted(order), order)


if __name__ == "__main__":
    unittest.main()
