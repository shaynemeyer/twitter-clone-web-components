import { LitElement, html } from '../../lit.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class MenuIcon extends LitElement {
	static styles = [ SidebarButtonStyles, PrimaryStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 10.125C5.121 10.125 5.625 9.621 5.625 9C5.625 8.379 5.121 7.875 4.5 7.875C3.879 7.875 3.375 8.379 3.375 9C3.375 9.621 3.879 10.125 4.5 10.125ZM9 10.125C9.621 10.125 10.125 9.621 10.125 9C10.125 8.379 9.621 7.875 9 7.875C8.379 7.875 7.875 8.379 7.875 9C7.875 9.621 8.379 10.125 9 10.125ZM13.5 10.125C14.121 10.125 14.625 9.621 14.625 9C14.625 8.379 14.121 7.875 13.5 7.875C12.879 7.875 12.375 8.379 12.375 9C12.375 9.621 12.879 10.125 13.5 10.125Z" fill="#1D98F0"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('menu-icon', MenuIcon);
