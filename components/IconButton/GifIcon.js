import { LitElement, html } from '../../lit.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class GifIcon extends LitElement {
	static styles = [ SidebarButtonStyles, PrimaryStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.375 1.515H2.625C1.695 1.515 0.9375 2.27025 0.9375 3.20025V14.8305C0.9375 15.759 1.695 16.515 2.625 16.515H15.375C16.305 16.515 17.0625 15.759 17.0625 14.8305V3.20025C17.0625 2.27025 16.305 1.515 15.375 1.515ZM15.9375 14.8305C15.9375 15.138 15.6855 15.39 15.375 15.39H2.625C2.3145 15.39 2.0625 15.138 2.0625 14.8305V3.20025C2.0625 2.89125 2.3145 2.64 2.625 2.64H15.375C15.6855 2.64 15.9375 2.89125 15.9375 3.20025V14.8305ZM14.25 7.875V6.6H10.95V11.4H12.225V9.9H13.725V8.625H12.225V7.875H14.25ZM8.775 6.6H10.05V11.4H8.775V6.6ZM6.075 7.8C6.375 7.8 6.75 7.95 6.975 8.175L7.875 7.425C7.425 6.9 6.75 6.6 6.075 6.6C4.725 6.6 3.675 7.65 3.675 9C3.675 10.35 4.725 11.4 6.075 11.4C6.825 11.4 7.425 11.1 7.875 10.575V8.7H5.775V9.6H6.675V10.05C6.525 10.125 6.3 10.2 6.075 10.2C5.4 10.2 4.875 9.675 4.875 9C4.875 8.4 5.4 7.8 6.075 7.8Z" fill="#1D98F0"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('gif-icon', GifIcon);
