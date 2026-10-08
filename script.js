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
