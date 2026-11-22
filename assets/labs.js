(() => {
  "use strict";
  if (!document.body.hasAttribute("data-labs")) return;
  const {t} = window.I18N;
  const labPrefix = t("labPrefix");
  const fail = message => {
    const box = document.getElementById("boot-error");
    box.hidden = false;
    box.textContent = message;
    throw new Error(message);
  };
  const data = window.LABS_DATA;
  if (!data || !Array.isArray(data.labs)) fail(t("labs.dataMissing"));
  const main = document.getElementById("main");
  const toc = document.getElementById("toc");
  const labs = data.labs.filter(lab => lab.enabled);
  const labNumbers = new Map(labs.map((lab, i) => [lab.key, i + 1]));
  const sectionNumbers = new Map();
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
  const element = id => document.getElementById(id) || fail(t("labs.sectionMissing", {id}));
  const stepPrefix = new RegExp(`^(?:${labPrefix})?\\d+-\\d+\\s+`);
  const title = node => node.querySelector("h2, h3").textContent.replace(stepPrefix, "");
  const link = (id, badge, text) => {
    const node = document.createElement("a");
    node.href = `#${id}`;
    node.innerHTML = `<span class="nav-number">${escape(badge)}</span>${escape(text)}`;
    return node;
  };
  const assigned = new Set();
  [...data.before, ...data.after].forEach(item => element(item.id));
  labs.forEach((lab, i) => {
    if (labNumbers.get(lab.key) !== i + 1) fail(t("labs.keyDuplicate", {key: lab.key}));
    lab.sections.forEach(id => {
      element(id);
      if (assigned.has(id)) fail(t("labs.sectionDuplicate", {id}));
      assigned.add(id);
    });
    if (lab.video && !lab.sections.includes(lab.video.id)) fail(t("labs.videoSection", {id: lab.video.id}));
    lab.steps.forEach((ids, step) => ids.forEach(id => {
      element(id);
      if (sectionNumbers.has(id)) fail(t("labs.stepDuplicate", {id}));
      sectionNumbers.set(id, `${i + 1}-${step + 1}`);
    }));
    lab.prerequisites.forEach(key => {
      if (!labNumbers.has(key) || labNumbers.get(key) >= i + 1) fail(t("labs.badPrerequisite", {key}));
    });
    lab.more.forEach(key => {
      if (!data.cards[key]) fail(t("labs.cardMissing", {key}));
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
    const prereqs = lab.prerequisites.map(key => `<a href="#lab-${labNumbers.get(key)}">${t("lab", {n: labNumbers.get(key)})}</a>`).join(" · ") || t("labs.none");
    band.innerHTML = `<p class="section-label">${t("labs.bandLabel", {n: number, kind: lab.required ? t("required") : t("optional")})}</p><h2>${escape(lab.title)}</h2>
      <p class="intro">${escape(lab.lead)}</p>
      <div class="lab-screens">${lab.screens.map(screen => `<span class="scope-badge">${escape(t("labs.screens", {screen}))}</span>`).join("")}</div>
      <p class="lab-prerequisites"><strong>${t("labs.prerequisites")}</strong> ${prereqs}</p>`;
    main.append(band);
    const parentLink = link(band.id, String(number), lab.title);
    parentLink.dataset.labLink = lab.key;
    toc.append(parentLink);
    if (lab.video) {
      const videoLink = link(lab.video.id, lab.video.badge, lab.video.title);
      videoLink.className = "lab-child";
      videoLink.dataset.labChild = lab.key;
      toc.append(videoLink);
    }
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
          node.textContent = `${step} ${node.textContent.replace(stepPrefix, "")}`;
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
    more.innerHTML = `<strong>${t("labs.learnMore")}</strong> ${lab.more.map(key => `<a href="#learn-${key}">${escape(data.cards[key])}</a>`).join(" · ")}`;
    main.append(more);
  });
  data.after.forEach(common);
  const footer = main.querySelector(".footnotes");
  if (footer) main.append(footer);
  document.querySelectorAll("[data-lab-gallery]").forEach(host => {
    const number = sectionNumbers.get(host.dataset.labGallery);
    if (!number) fail(t("labs.galleryNumberMissing", {id: host.dataset.labGallery}));
    const label = `${t("lab", {n: number})} · ${host.dataset.igniteLabel}`;
    const gallery = host.querySelector(".gallery");
    gallery.setAttribute("aria-label", label);
    gallery.querySelector(".gallery-heading > span").textContent = t("gallery.heading", {label});
    gallery.querySelector(".thumbnails").setAttribute("aria-label", t("gallery.select", {label}));
  });
  document.querySelectorAll("[data-lab-ref]").forEach(node => {
    const [kind, key] = node.dataset.labRef.split(":");
    const number = kind === "lab" ? labNumbers.get(key) : kind === "sec" ? sectionNumbers.get(key) : null;
    if (!number) fail(t("labs.refMissing", {ref: node.dataset.labRef}));
    node.textContent = t("lab", {n: number});
  });
  window.__labsReady = true;
})();
