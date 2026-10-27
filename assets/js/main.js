(function () {
  var root = document.documentElement;

  // Theme toggle (initial theme is set inline in <head>)
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mobile menu
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", open);
    });
  }

  // Filter chips: within each [data-filter-root], buttons with data-filter
  // show only items whose data-tags contain that value. Sections marked
  // [data-filter-section] are hidden when none of their items are visible.
  document.querySelectorAll("[data-filter-root]").forEach(function (group) {
    var buttons = group.querySelectorAll("[data-filter]");
    var items = group.querySelectorAll("[data-tags]");
    var sections = group.querySelectorAll("[data-filter-section]");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn); });
        items.forEach(function (item) {
          var tags = item.getAttribute("data-tags").split(/\s+/);
          item.hidden = filter !== "all" && tags.indexOf(filter) === -1;
        });
        sections.forEach(function (section) {
          section.hidden = !section.querySelector("[data-tags]:not([hidden])");
        });
      });
    });
  });

  // 360° panoramas (Pannellum is only loaded on pages with `pannellum: true`)
  if (window.pannellum) {
    document.querySelectorAll("[data-panorama]").forEach(function (el) {
      pannellum.viewer(el, {
        type: "equirectangular",
        panorama: el.getAttribute("data-panorama"),
        preview: el.getAttribute("data-preview") || undefined,
        autoLoad: false, // load on click so the page stays fast
        showZoomCtrl: true,
        hfov: 100
      });
    });
  }
})();
