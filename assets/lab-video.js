(() => {
  "use strict";
  // Players for the lab videos (Labs 6-9 and 10-16). Every <section data-lab-video="video-iq"> gets a player rendered from
  // window.LAB_VIDEOS (assets/ignite/video-data[.en].js, written by the publisher), and every [data-lab-video-jump="<lab key>"]
  // link plays the first chapter of that lab. Nothing is downloaded until a video is played.
  const hosts = [...document.querySelectorAll("[data-lab-video]")];
  if (!hosts.length) return;
  const {t, lang} = window.I18N;
  const videos = window.LAB_VIDEOS && Array.isArray(window.LAB_VIDEOS.videos) ? window.LAB_VIDEOS.videos : [];
  const escape = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const formatTime = seconds => {
    const whole = Math.max(0, Math.floor(seconds));
    return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
  };
  const isoDuration = seconds => {
    const whole = Math.max(0, Math.floor(seconds));
    return `PT${Math.floor(whole / 60)}M${whole % 60}S`;
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const players = new Map();

  // Starting one video pauses every other video on the page, including the summary and the full Labs 1-16 walkthrough.
  document.addEventListener("play", event => {
    if (!(event.target instanceof HTMLVideoElement)) return;
    document.querySelectorAll("video").forEach(video => {
      if (video !== event.target && !video.paused) video.pause();
    });
  }, true);

  const mount = (host, entry) => {
    const id = entry.id;
    host.insertAdjacentHTML("beforeend", `<p class="video-meta">${escape(t("video.meta", {duration: formatTime(entry.durationSeconds), chapters: entry.chapters.length}))}</p>
      <div class="video-frame"><video id="${escape(id)}-player" controls preload="none" playsinline src="${escape(entry.file)}" poster="${escape(entry.poster)}" aria-label="${escape(t("video.aria", {title: entry.title}))}">${escape(t("video.unsupported"))}</video></div>
      <div class="video-tools">
        <div>
          <label for="${escape(id)}-speed">${escape(t("video.speed"))} <select id="${escape(id)}-speed">${[1, 1.25, 1.5, 2].map(rate => `<option value="${rate}">${rate}×</option>`).join("")}</select></label>
          <label class="caption-toggle"><input id="${escape(id)}-captions" type="checkbox"> ${escape(t("video.captions"))}</label>
        </div>
        <div>
          <a class="button small" href="${escape(entry.file)}" download>${escape(t("video.downloadMp4"))}</a>
          <a class="button small" href="${escape(entry.captions)}" download>${escape(t("video.downloadVtt"))}</a>
        </div>
      </div>
      <p class="media-status" id="${escape(id)}-status" role="status">${escape(t("video.hint"))}</p>
      <div class="chapters" role="group" aria-label="${escape(t("video.chapters"))}"></div>`);
    const video = host.querySelector("video");
    const frame = host.querySelector(".video-frame");
    const status = host.querySelector(".media-status");
    const speed = host.querySelector("select");
    const toggle = host.querySelector(".caption-toggle input");
    const say = (message, error = false) => {
      status.classList.toggle("error", error);
      status.textContent = message;
    };
    const mediaError = () => t("video.mediaError", {code: video.error ? video.error.code : "unknown"});
    video.addEventListener("error", () => say(t("video.failed", {message: mediaError()}), true));

    speed.addEventListener("change", () => {
      video.defaultPlaybackRate = video.playbackRate = Number(speed.value);
    });
    video.addEventListener("ratechange", () => {
      if ([...speed.options].some(option => option.value === String(video.playbackRate))) speed.value = String(video.playbackRate);
    });

    // The cues are embedded in the data because a <track src> cannot be loaded when the page is opened from a file.
    const track = video.addTextTrack("captions", t("video.captionsTrack"), lang);
    (entry.cues || []).forEach(cue => track.addCue(new VTTCue(cue.start, cue.end, cue.text)));
    track.mode = "hidden";
    toggle.disabled = !track.cues || !track.cues.length;
    toggle.addEventListener("change", () => { track.mode = toggle.checked ? "showing" : "hidden"; });

    const play = async seconds => {
      if (!Number.isFinite(seconds) || seconds < 0) throw new RangeError("Invalid video timestamp.");
      frame.scrollIntoView({block: "start", behavior: reduceMotion.matches ? "auto" : "smooth"});
      const target = Number.isFinite(video.duration) ? Math.min(seconds, Math.max(0, video.duration - 0.1)) : seconds;
      say(t("video.loading"));
      try {
        // Before the first load this sets the start position and play() fetches the file, inside the click that asked for it.
        video.currentTime = target;
        await video.play();
        if (Math.abs(video.currentTime - target) > 1.5) video.currentTime = target;
        say(t("video.playing", {time: formatTime(seconds)}));
      } catch (error) {
        if (error.name === "AbortError" && video.paused) say(t("video.paused"));
        else if (error.name === "NotAllowedError") say(t("video.blocked"), true);
        else say(t("video.failed", {message: video.error ? mediaError() : error.message}), true);
      }
    };

    const list = host.querySelector(".chapters");
    entry.chapters.forEach(chapter => {
      const row = document.createElement("div");
      row.className = "chapter-row";
      row.innerHTML = `<button type="button" class="chapter" data-time="${chapter.seconds}"><time datetime="${isoDuration(chapter.seconds)}">${formatTime(chapter.seconds)}</time><span>${escape(chapter.title)}</span></button><a class="chapter-guide" href="#${escape(chapter.id)}" aria-label="${escape(t("video.guideAria", {step: chapter.step}))}">${escape(t("video.guide"))}</a>`;
      row.querySelector("button").addEventListener("click", () => { void play(chapter.seconds); });
      list.append(row);
    });

    // Mark the chapter that is playing once the viewer has started the video.
    const buttons = [...list.querySelectorAll(".chapter")];
    let started = false;
    const mark = () => {
      if (!started) return;
      const now = video.currentTime + 0.05;
      const current = entry.chapters.reduce((found, chapter, index) => chapter.seconds <= now ? index : found, -1);
      buttons.forEach((button, index) => {
        if (index === current) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    };
    video.addEventListener("play", () => { started = true; mark(); });
    video.addEventListener("timeupdate", mark);
    video.addEventListener("seeked", mark);
    players.set(id, {play});
  };

  hosts.forEach(host => {
    const entry = videos.find(video => video.id === host.dataset.labVideo);
    if (!entry || !Array.isArray(entry.chapters) || !entry.chapters.length) {
      host.insertAdjacentHTML("beforeend", `<p class="media-status error" role="status">${escape(t("video.dataMissing"))}</p>`);
      console.error(`Missing video data for ${host.dataset.labVideo}`);
      return;
    }
    mount(host, entry);
  });

  // "Watch in the video" in a lab: play the video of that lab from its first chapter. Without a player the link stays a plain anchor.
  // A lab can be recorded under more than one key (l09a-fabric-prep, then l09-fabric-iq), so labs are compared by their number: the first three characters.
  const sameLab = (a, b) => a.slice(0, 3) === b.slice(0, 3);
  document.querySelectorAll("[data-lab-video-jump]").forEach(link => {
    const lab = link.dataset.labVideoJump;
    const entry = videos.find(video => players.has(video.id) && video.chapters.some(chapter => sameLab(chapter.lab, lab)));
    if (!entry) return;
    const first = entry.chapters.filter(chapter => sameLab(chapter.lab, lab)).reduce((early, chapter) => chapter.seconds < early.seconds ? chapter : early);
    link.title = first.title;
    link.append(` · ${formatTime(first.seconds)}`);
    link.addEventListener("click", event => {
      event.preventDefault();
      void players.get(entry.id).play(first.seconds);
    });
  });
  window.__labVideoReady = true;
})();
