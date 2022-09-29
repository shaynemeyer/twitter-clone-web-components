import { LitElement, html } from '../../lit.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class CommentIcon extends LitElement {
	static styles = [ SidebarButtonStyles, PrimaryStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5345 1.68151L7.42202 1.67401C4.14152 1.67401 1.57202 4.24426 1.57202 7.52551C1.57202 10.599 3.96152 12.93 7.17077 13.053V15.924C7.17077 16.005 7.20377 16.1385 7.26077 16.2263C7.36727 16.395 7.54877 16.4865 7.73477 16.4865C7.83827 16.4865 7.94252 16.458 8.03627 16.398C8.23427 16.272 12.891 13.293 14.1023 12.2685C15.5288 11.061 16.3823 9.29101 16.3845 7.53451V7.52176C16.38 4.24651 13.812 1.68151 10.5345 1.68076V1.68151ZM13.3748 11.4105C12.5243 12.1305 9.72827 13.9643 8.29577 14.8928V12.5025C8.29577 12.192 8.04452 11.94 7.73327 11.94H7.43627C4.69127 11.94 2.69777 10.083 2.69777 7.52551C2.69777 4.87501 4.77377 2.79901 7.42277 2.79901L10.5345 2.80651C13.1835 2.80651 15.2595 4.88101 15.261 7.52851C15.2588 8.96101 14.5545 10.4115 13.3755 11.4105H13.3748Z" fill="#666666"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('comment-icon', CommentIcon);
