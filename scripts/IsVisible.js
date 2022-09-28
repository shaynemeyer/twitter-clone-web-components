function isVisible(element1, element2) {
  element1.addEventListener('click', () => {
    const flexString = 'display: flex;';
    const attr = element2.getAttribute('style');

    if (attr === flexString) {
      element2.style.display = 'none';
    } else {
      element2.style.display = 'flex';
    }
  });
}

export default isVisible;
