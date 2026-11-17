(() => {
  "use strict";
  if (!document.body.hasAttribute("data-labs")) return;
  const fail = message => {
    const box = document.getElementById("boot-error");
    box.hidden = false;
    box.textContent = message;
    throw new Error(message);
  };
  const data = window.LABS_DATA;
  if (!data || !Array.isArray(data.labs)) fail("실습 구성 데이터를 불러오지 못했습니다.");
  const main = document.getElementById("main");
  const toc = document.getElementById("toc");
  const labs = data.labs.filter(lab => lab.enabled);
  const labNumbers = new Map(labs.map((lab, i) => [lab.key, i + 1]));
  const sectionNumbers = new Map();
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
  const element = id => document.getElementById(id) || fail(`실습 섹션을 찾지 못했습니다: ${id}`);
  const title = node => node.querySelector("h2, h3").textContent.replace(/^(?:실습 )?\d+-\d+\s+/, "");
  const link = (id, badge, text) => {
    const node = document.createElement("a");
    node.href = `#${id}`;
    node.innerHTML = `<span class="nav-number">${escape(badge)}</span>${escape(text)}`;
    return node;
  };
  const assigned = new Set();
  [...data.before, ...data.after].forEach(item => element(item.id));
  labs.forEach((lab, i) => {
    if (labNumbers.get(lab.key) !== i + 1) fail(`실습 키가 중복됐습니다: ${lab.key}`);
    lab.sections.forEach(id => {
      element(id);
      if (assigned.has(id)) fail(`실습 섹션이 중복 배정됐습니다: ${id}`);
      assigned.add(id);
    });
    lab.steps.forEach((ids, step) => ids.forEach(id => {
      element(id);
      if (sectionNumbers.has(id)) fail(`실습 단계가 중복됐습니다: ${id}`);
      sectionNumbers.set(id, `${i + 1}-${step + 1}`);
    }));
    lab.prerequisites.forEach(key => {
      if (!labNumbers.has(key) || labNumbers.get(key) >= i + 1) fail(`잘못된 선행 실습입니다: ${key}`);
    });
    lab.more.forEach(key => {
      if (!data.cards[key]) fail(`소개 카드 이름을 찾지 못했습니다: ${key}`);
      element(`learn-${key}`);
    });
  });
  toc.replaceChildren();
  const common = item => {
    main.append(element(item.id));
    toc.append(link(item.id, item.badge, item.title));
  };
  data.before.forEach(common);
  labs.forEach((lab, i) => {
    const number = i + 1;
    const band = document.createElement("div");
    band.id = `lab-${number}`;
    band.className = "lab-band observed-section";
    band.dataset.lab = lab.key;
    const prereqs = lab.prerequisites.map(key => `<a href="#lab-${labNumbers.get(key)}">실습 ${labNumbers.get(key)}</a>`).join(" · ") || "없음 · 운영자 배정값 준비";
    band.innerHTML = `<p class="section-label">실습 ${number} · ${lab.required ? "필수" : "선택"}</p><h2>${escape(lab.title)}</h2>
      <p class="intro">${escape(lab.lead)}</p>
      <div class="lab-screens">${lab.screens.map(screen => `<span class="scope-badge">화면 근거: ${escape(screen)}</span>`).join("")}</div>
      <p class="lab-prerequisites"><strong>선행:</strong> ${prereqs}</p>`;
    main.append(band);
    const parentLink = link(band.id, String(number), lab.title);
    parentLink.dataset.labLink = lab.key;
    toc.append(parentLink);
    lab.sections.forEach(id => {
      const section = element(id);
      section.dataset.lab = lab.key;
      main.append(section);
    });
    lab.steps.forEach(ids => {
      ids.forEach(id => {
        const node = element(id);
        const step = sectionNumbers.get(id);
        node.dataset.lab = lab.key;
        node.dataset.labNumber = step;
        if (node.matches("section")) {
          const label = node.querySelector(".section-label");
          if (label) label.textContent = `${step} · ${label.textContent.replace(/^\d+-\d+\s*·\s*/, "")}`;
          const badge = node.querySelector(":scope > .stage-header > .stage-number");
          if (badge) badge.textContent = step;
        } else if (node.matches("h3")) {
          node.textContent = `${step} ${node.textContent.replace(/^(?:실습 )?\d+-\d+\s+/, "")}`;
          node.classList.add("observed-section");
        }
      });
      const node = element(ids[0]);
      const child = link(node.id, sectionNumbers.get(node.id), node.matches("h3") ? node.textContent.replace(/^\d+-\d+\s+/, "") : title(node));
      child.className = "lab-child";
      child.dataset.labChild = lab.key;
      child.dataset.labStep = sectionNumbers.get(node.id);
      toc.append(child);
    });
    const more = document.createElement("p");
    more.className = "lab-more";
    more.innerHTML = `<strong>더 알아보기:</strong> ${lab.more.map(key => `<a href="#learn-${key}">${escape(data.cards[key])}</a>`).join(" · ")}`;
    main.append(more);
  });
  data.after.forEach(common);
  const footer = main.querySelector(".footnotes");
  if (footer) main.append(footer);
  document.querySelectorAll("[data-lab-gallery]").forEach(host => {
    const number = sectionNumbers.get(host.dataset.labGallery);
    if (!number) fail(`갤러리의 실습 번호를 찾지 못했습니다: ${host.dataset.labGallery}`);
    const label = `실습 ${number} · ${host.dataset.igniteLabel}`;
    const gallery = host.querySelector(".gallery");
    gallery.setAttribute("aria-label", label);
    gallery.querySelector(".gallery-heading > span").textContent = `${label} · 사진을 누르면 확대`;
    gallery.querySelector(".thumbnails").setAttribute("aria-label", `${label} 화면 선택`);
  });
  document.querySelectorAll("[data-lab-ref]").forEach(node => {
    const [kind, key] = node.dataset.labRef.split(":");
    const number = kind === "lab" ? labNumbers.get(key) : kind === "sec" ? sectionNumbers.get(key) : null;
    if (!number) fail(`실습 참조를 찾지 못했습니다: ${node.dataset.labRef}`);
    node.textContent = `실습 ${number}`;
  });
  window.__labsReady = true;
})();
