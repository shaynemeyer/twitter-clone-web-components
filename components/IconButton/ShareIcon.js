import { LitElement, html } from '../../lit.js';
import GrayStyles from '../Styles/GrayStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class ShareIcon extends LitElement {
	static styles = [ SidebarButtonStyles, GrayStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.781 16.458H3.219C2.271 16.458 1.5 15.687 1.5 14.739V10.5C1.5 10.1895 1.752 9.9375 2.0625 9.9375C2.373 9.9375 2.625 10.1895 2.625 10.5V14.739C2.625 15.0667 2.89125 15.333 3.219 15.333H14.781C15.1088 15.333 15.375 15.0667 15.375 14.739V10.5C15.375 10.1895 15.627 9.9375 15.9375 9.9375C16.248 9.9375 16.5 10.1895 16.5 10.5V14.739C16.5 15.687 15.729 16.458 14.781 16.458ZM13.1475 5.6025L9.3975 1.8525C9.17775 1.63275 8.8215 1.63275 8.6025 1.8525L4.8525 5.6025C4.632 5.82225 4.632 6.1785 4.8525 6.3975C5.073 6.6165 5.42775 6.618 5.6475 6.3975L8.4375 3.6075V11.25C8.4375 11.5605 8.6895 11.8125 9 11.8125C9.3105 11.8125 9.5625 11.5605 9.5625 11.25V3.6075L12.3525 6.3975C12.462 6.50775 12.606 6.5625 12.75 6.5625C12.894 6.5625 13.038 6.5085 13.1475 6.3975C13.3673 6.17775 13.3673 5.82225 13.1475 5.6025Z" fill="#666666"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('share-icon', ShareIcon);
