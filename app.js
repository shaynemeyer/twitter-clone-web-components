import './components/Sidebar/SidebarHome.js';
import './components/Sidebar/SidebarExplore.js';
import './components/Sidebar/SidebarNotification.js';
import './components/Sidebar/SidebarBookmark.js';
import './components/Sidebar/SidebarList.js';
import './components/Sidebar/SidebarProfile.js';
import './components/Sidebar/SidebarMore.js';
import './components/Sidebar/SidebarMoon.js';
import './components/Sidebar/SidebarLogo.js';
import './components/Button/PrimaryButton.js';
import './components/Sidebar/SidebarUsername.js';

import './components/Dropdown/DropdownTopic.js';
import './components/Dropdown/DropdownNews.js';
import './components/Dropdown/DropdownSpaces.js';
import './components/Dropdown/DropdownAds.js';
import './components/Dropdown/DropdownAnalytics.js';
import './components/Dropdown/DropdownSettings.js';
import './components/Dropdown/DropdownHelp.js';
import './components/Dropdown/DropdownDisplay.js';
import './components/Dropdown/DropdownShortcuts.js';

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
