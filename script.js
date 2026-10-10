// Dark mode toggle. Defaults to the visitor's system preference;
// a click sets an explicit override, saved in localStorage.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var explicit = document.documentElement.getAttribute('data-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = explicit ? explicit === 'dark' : systemDark;
    var next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});


// ---------------------------------------------------------------------------
// SEASONAL: Halloween (recurs every year)
// Everything below switches itself on only between October 24 and November 1
// each year (visitor's local time) and is inert the rest of the year. The
// dates follow the current year automatically, and dismissing the bar is
// remembered for that year only, so it returns every October. To preview
// outside the window, add ?halloween=1 to the homepage URL
// (index.html?halloween=1). To change the dates, edit HW_START/HW_END below.
// What it does: swaps the favicon to the pumpkin on every page, and on the
// homepage only adds a slim dismissible announcement line that opens the
// Halloween animation in a lightbox (plays only when clicked).
// ---------------------------------------------------------------------------
(function () {
  var now = new Date();
  var year = now.getFullYear();
  var HW_START = new Date(year, 9, 24);   // Oct 24, 00:00 local
  var HW_END   = new Date(year, 10, 2);   // Nov 2, 00:00 local (exclusive)
  var DISMISS_KEY = 'halloween' + year + '-dismissed';
  var forced = /[?&]halloween=1(&|$)/.test(window.location.search);
  var active = forced || (now >= HW_START && now < HW_END);
  if (!active) return;

  // 1) Pumpkin favicon (all pages): favicon.ico -> favicon-halloween.ico, etc.
  var icons = document.querySelectorAll('link[rel="icon"]');
  for (var i = 0; i < icons.length; i++) {
    var href = icons[i].getAttribute('href');
    if (href && href.indexOf('favicon-halloween') === -1) {
      icons[i].setAttribute('href', href.replace(/favicon(?=[.-])/, 'favicon-halloween'));
    }
  }

  // 2) Homepage announcement line + lightbox (homepage only)
  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.work-grid')) return;       // homepage only
    var dismissed = false;
    try { dismissed = !forced && localStorage.getItem(DISMISS_KEY) === '1'; } catch (e) {}
    if (dismissed) return;

    var header = document.querySelector('.site-header');
    if (!header) return;

    var bar = document.createElement('div');
    bar.className = 'hw-bar';
    bar.innerHTML =
      '<div class="wrap hw-bar-row">' +
        '<span class="hw-bar-text"><span aria-hidden="true">\uD83C\uDF83</span> Happy Halloween ' +
        '<button type="button" class="hw-open">Watch the 10-second animation &rarr;</button></span>' +
        '<button type="button" class="hw-dismiss" aria-label="Dismiss Halloween message">&times;</button>' +
      '</div>';
    header.parentNode.insertBefore(bar, header.nextSibling);

    var overlay = null, video = null, closeBtn = null, lastFocus = null;

    function build() {
      overlay = document.createElement('div');
      overlay.className = 'hw-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Happy Halloween animation');
      overlay.hidden = true;
      overlay.innerHTML =
        '<div class="hw-dialog">' +
          '<button type="button" class="hw-close" aria-label="Close animation">&times;</button>' +
          '<video class="hw-video" controls playsinline preload="none" poster="halloween/poster.jpg">' +
            '<source src="halloween/happy-halloween.mp4" type="video/mp4">' +
            '<source src="halloween/happy-halloween.webm" type="video/webm">' +
            'Your browser does not support embedded video.' +
          '</video>' +
        '</div>';
      document.body.appendChild(overlay);
      video = overlay.querySelector('.hw-video');
      closeBtn = overlay.querySelector('.hw-close');
      closeBtn.addEventListener('click', close);
      overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    }

    function onKey(e) {
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'Tab') {                    // keep focus inside the dialog
        var els = [closeBtn, video];
        var idx = els.indexOf(document.activeElement);
        if (e.shiftKey && idx <= 0) { e.preventDefault(); els[els.length - 1].focus(); }
        else if (!e.shiftKey && idx === els.length - 1) { e.preventDefault(); els[0].focus(); }
      }
    }

    function open() {
      if (!overlay) build();
      lastFocus = document.activeElement;
      overlay.hidden = false;
      document.body.classList.add('hw-lock');
      document.addEventListener('keydown', onKey);
      closeBtn.focus();
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    }

    function close() {
      if (!overlay || overlay.hidden) return;
      video.pause();
      video.currentTime = 0;
      overlay.hidden = true;
      document.body.classList.remove('hw-lock');
      document.removeEventListener('keydown', onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    bar.querySelector('.hw-open').addEventListener('click', open);
    bar.querySelector('.hw-dismiss').addEventListener('click', function () {
      bar.parentNode.removeChild(bar);
      try { localStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
    });
  });
})();
