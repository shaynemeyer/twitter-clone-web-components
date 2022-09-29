import { LitElement, html } from '../../lit.js';
import GrayStyles from '../Styles/GrayStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class PromotedIcon extends LitElement {
	static styles = [ SidebarButtonStyles, GrayStyles ];

	render () {
		return html`
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25V19.75C1 20.993 2.007 22 3.25 22H20.75C21.993 22 23 20.993 23 19.75V4.25C23 3.007 21.993 2 20.75 2ZM17.5 13.504C17.5 13.987 17.108 14.379 16.625 14.379C16.142 14.379 15.75 13.986 15.75 13.503V9.967L8.203 17.513C8.033 17.683 7.808 17.769 7.583 17.769C7.358 17.769 7.136 17.683 6.965 17.512C6.623 17.17 6.623 16.616 6.965 16.275L14.512 8.728H10.972C10.49 8.728 10.098 8.335 10.098 7.852C10.098 7.369 10.49 6.977 10.973 6.977H16.623C17.106 6.977 17.498 7.367 17.498 7.851V13.501L17.5 13.504Z" fill="#666666"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('promoted-icon', PromotedIcon);
