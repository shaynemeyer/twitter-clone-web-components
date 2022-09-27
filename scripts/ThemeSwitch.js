const switchTheme = document.querySelectorAll('.default');
const sidebarMoon = document.querySelector('sidebar-moon');

sidebarMoon.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  switchTheme.forEach((singleElements) => {
    singleElements.classList.toggle('default');
    singleElements.classList.toggle('dark');
  });
});
