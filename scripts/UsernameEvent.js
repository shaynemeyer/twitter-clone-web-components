const dropdownUsername = document.querySelector('#dropdownUsername');
const sidebarUsername = document.querySelector('sidebar-username');

sidebarUsername.addEventListener('click', () => {
  const flexString = 'display: flex;';
  const attr = dropdownUsername.getAttribute('style');

  if (attr === flexString) {
    dropdownUsername.style.display = 'none';
  } else {
    dropdownUsername.style.display = 'flex';
  }
});
