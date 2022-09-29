import { LitElement, html } from '../../lit.js';
import GrayStyles from '../Styles/GrayStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class PinnedIcon extends LitElement {
	static styles = [ SidebarButtonStyles, GrayStyles ];

	render () {
		return html`
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.235 14.61C19.86 12.865 17.893 11.104 16.225 10.485L15.681 5.53698L17.176 3.29498C17.333 3.05898 17.348 2.75698 17.213 2.50798C17.079 2.25798 16.821 2.10498 16.538 2.10498H7.398C7.114 2.10498 6.856 2.25898 6.722 2.50798C6.588 2.75798 6.602 3.06098 6.76 3.29598L8.258 5.54298L7.774 10.486C6.106 11.106 4.141 12.866 3.77 14.602C3.73 14.762 3.754 15.006 3.902 15.196C4.005 15.328 4.206 15.486 4.582 15.486H8.64L11.544 22.198C11.622 22.382 11.804 22.5 12.002 22.5C12.2 22.5 12.382 22.382 12.462 22.198L15.365 15.485H19.422C19.798 15.485 19.998 15.329 20.102 15.199C20.248 15.011 20.274 14.765 20.237 14.609L20.235 14.61Z" fill="#666666"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('pinned-icon', PinnedIcon);
