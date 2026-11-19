(() => {
  "use strict";
  const {t} = window.I18N;
  const storageKey = "internal-guest-guide-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;

  const reportStorageError = error => {
    if (!(error instanceof DOMException) || !["SecurityError", "QuotaExceededError"].includes(error.name)) {
      throw error;
    }
    console.warn(t("theme.storageUnavailable"), error);
  };

  try {
    preference = window.localStorage.getItem(storageKey);
  } catch (error) {
    reportStorageError(error);
  }
  if (preference !== null && preference !== "light" && preference !== "dark") {
    console.warn(t("theme.invalid"));
    preference = null;
  }

  const applyTheme = () => {
    const theme = preference || (systemTheme.matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.title = theme === "dark" ? t("theme.toLight") : t("theme.toDark");
    }
  };
  applyTheme();
  systemTheme.addEventListener("change", () => {
    if (preference === null) applyTheme();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    const status = document.getElementById("theme-status");
    if (!button || !status) throw new Error("Missing theme controls.");
    applyTheme();
    button.addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme();
      status.textContent = preference === "dark" ? t("theme.darkOn") : t("theme.lightOn");
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch (error) {
        reportStorageError(error);
        button.title = t("theme.notSavedTitle");
        status.textContent += t("theme.notSavedStatus");
      }
    });
  }, {once: true});
})();
