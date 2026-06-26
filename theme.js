(function () {
  const STORAGE_KEY = 'ca-theme';
  const root = document.body;

  function apply(theme) {
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }

  // Initial: stored preference > system preference > light
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply('dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const isDark = root.classList.contains('dark');
      apply(isDark ? 'light' : 'dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'light' : 'dark');
    });
  });
})();
