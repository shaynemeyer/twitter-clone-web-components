const dropdownItems = document.querySelector('#dropdownItems');
const sidebarMore = document.querySelector('sidebar-more');

sidebarMore.addEventListener('click', () => {
  const flexString = 'display: flex;';
  const attr = dropdownItems.getAttribute('style');

  if (attr === flexString) {
    dropdownItems.style.display = 'none';
  } else {
    dropdownItems.style.display = 'flex';
  }
});
