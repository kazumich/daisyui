// dark-mode.js
function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme    = currentTheme === 'light' ? 'dark' : 'light';

  // data-theme を更新
  htmlElement.setAttribute('data-theme', newTheme);

  // ★ 追加: class="dark" を同期
  if (newTheme === 'dark') {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
}

// dark-mode.js で updateIcon を差し替え
function updateIcon(theme) {
  const targets = ['theme-icon-desktop', 'theme-icon-mobile'];
  const moon = `
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3C10.939 3 9.921 3.196 8.984 3.554a9 9 0 1011.462 11.462A9 9 0 0112 3z" />
  `;
  const sun = `
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05 4.636 4.636m12.728 1.414-1.414 1.414M6.05 17.95l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z" />
  `;
  targets.forEach((id) => {
    const icon = document.getElementById(id);
    if (icon) icon.innerHTML = theme === 'dark' ? moon : sun;
  });
}


// 初回ロード時にテーマを反映
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // ★ 追加: class="dark" も同期
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  }

  updateIcon(saved);
});
