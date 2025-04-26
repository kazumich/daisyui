function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
}

function updateIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    // 月のアイコン（ダークモード用）
    icon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3C10.939 3 9.921 3.196 8.984 3.554a9 9 0 1011.462 11.462A9 9 0 0112 3z" />
    `;
  } else {
    // 太陽のアイコン（ライトモード用）
    icon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05 4.636 4.636m12.728 1.414-1.414 1.414M6.05 17.95l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z" />
    `;
  }
}

// 初回ページ読み込み時にテーマ設定
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  updateIcon(theme);
});