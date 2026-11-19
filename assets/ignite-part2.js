(() => {
  "use strict";
  // Fill the New Foundry galleries from their capture manifest.
  const {t} = window.I18N;
  const data = window.IGNITE_DATA;
  const fail = message => {
    const box = document.getElementById("ignite-boot-error");
    if (box) {
      box.hidden = false;
      box.textContent = message;
    }
    throw new Error(message);
  };
  if (!data || !Array.isArray(data.shots) || !data.shots.length) {
    fail(t("ignite.dataFailed"));
  }

  const escape = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const position = (box, shot) => `left:${box.x / shot.width * 100}%;top:${box.y / shot.height * 100}%;width:${box.width / shot.width * 100}%;height:${box.height / shot.height * 100}%`;
  const number = shot => shot.id.slice(0, 2);
  const imageMarkup = shot => `<span class="image-surface">
    <img src="${escape(shot.image)}" width="${shot.width}" height="${shot.height}" alt="${escape(t("ignite.imageAlt", {title: shot.title}))}" loading="lazy" decoding="async">
    ${shot.hotspots.map((box, index) => `<span class="hotspot" style="${position(box, shot)}" title="${escape(box.label)}"><b>${index + 1}</b></span>`).join("")}
  </span>`;

  // The zoom dialog is shared with the recorded walkthrough. index.html handles the size toggle,
  // the close button and a click on the backdrop, so only the content is set here.
  const zoom = document.getElementById("zoom");
  const zoomCanvas = document.getElementById("zoom-canvas");
  const zoomSize = document.getElementById("zoom-size");
  const zoomTitle = document.getElementById("zoom-title");
  const zoomCaption = document.getElementById("zoom-caption");
  if (!zoom || !zoomCanvas || !zoomSize || !zoomTitle || !zoomCaption) fail(t("ignite.zoomMissing"));
  const openZoom = shot => {
    zoomTitle.textContent = t("ignite.zoomTitle", {n: number(shot), title: shot.title});
    zoomCanvas.innerHTML = imageMarkup(shot);
    zoomCanvas.classList.remove("native");
    zoomSize.textContent = t("ignite.zoomNative");
    zoomCaption.textContent = shot.action;
    zoom.showModal();
    zoom.querySelector(".zoom-scroll").scrollTo(0, 0);
  };

  const gallery = (host, shots, label) => {
    const shell = document.createElement("div");
    shell.className = "gallery";
    shell.setAttribute("role", "group");
    shell.setAttribute("aria-label", label);
    shell.innerHTML = `<div class="gallery-heading"><span>${escape(t("gallery.heading", {label}))}</span><span class="gallery-counter" aria-live="polite"></span></div>
      <button type="button" class="photo-button"></button>
      <div class="gallery-caption"><h3></h3><p class="action"></p><p class="expected"></p><div class="target-legend"></div></div>
      <div class="gallery-tools"><div><button type="button" class="button small previous">${t("gallery.previous")}</button><button type="button" class="button small next">${t("gallery.next")}</button></div></div>
      <div class="thumbnails" role="group" aria-label="${escape(t("gallery.select", {label}))}"></div>`;
    host.append(shell);
    const photo = shell.querySelector(".photo-button");
    const thumbnails = shell.querySelector(".thumbnails");
    const previous = shell.querySelector(".previous");
    const next = shell.querySelector(".next");
    let current = 0;
    const render = () => {
      const shot = shots[current];
      shell.dataset.shotId = shot.id;
      shell.querySelector(".gallery-counter").textContent = t("gallery.counter", {n: current + 1, total: shots.length});
      photo.innerHTML = imageMarkup(shot);
      photo.setAttribute("aria-label", t("gallery.enlarge", {title: shot.title}));
      shell.querySelector("h3").textContent = t("gallery.caption", {n: number(shot), title: shot.title});
      shell.querySelector(".action").textContent = shot.action;
      shell.querySelector(".expected").textContent = t("gallery.expected", {expected: shot.expected});
      shell.querySelector(".target-legend").innerHTML = shot.hotspots.map((box, index) => `<span data-number="${index + 1}">${escape(box.label)}</span>`).join("");
      previous.disabled = current === 0;
      next.disabled = current === shots.length - 1;
      [...thumbnails.children].forEach((button, index) => button.setAttribute("aria-current", String(index === current)));
    };
    shots.forEach((shot, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "thumb";
      button.dataset.shotId = shot.id;
      button.setAttribute("aria-label", t("gallery.thumb", {n: number(shot), title: shot.title}));
      button.innerHTML = `<img src="${escape(shot.image)}" width="160" height="90" alt="" loading="lazy" decoding="async"><span>${escape(number(shot))} · ${escape(shot.title)}</span>`;
      button.addEventListener("click", () => { current = index; render(); });
      thumbnails.append(button);
    });
    previous.addEventListener("click", () => { if (current > 0) { current--; render(); } });
    next.addEventListener("click", () => { if (current < shots.length - 1) { current++; render(); } });
    photo.addEventListener("click", () => openZoom(shots[current]));
    render();
  };

  const hosts = [...document.querySelectorAll("[data-ignite-gallery]")];
  if (!hosts.length) fail(t("ignite.noHosts"));
  const used = new Set();
  hosts.forEach(host => {
    const group = host.dataset.igniteGallery;
    const shots = data.shots.filter(shot => shot.group === group);
    if (!shots.length) fail(t("ignite.noShots", {group}));
    used.add(group);
    gallery(host, shots, host.dataset.igniteLabel || group);
  });
  const unused = [...new Set(data.shots.map(shot => shot.group))].filter(group => !used.has(group));
  if (unused.length) fail(t("ignite.unused", {groups: unused.join(", ")}));

  // Sidebar links come from the sections themselves, so the order always matches the page.
  const toc = document.getElementById("toc");
  if (!toc) fail(t("ignite.tocMissing"));
  if (!document.body.hasAttribute("data-labs")) document.querySelectorAll("[data-ignite-nav]").forEach(section => {
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.innerHTML = `<span class="nav-number">${escape(section.dataset.igniteNav)}</span>${escape(section.dataset.igniteTitle)}`;
    toc.append(link);
  });
  window.__ignitePart2Ready = true;
})();
