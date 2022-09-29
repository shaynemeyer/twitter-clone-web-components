import { LitElement, html } from '../../lit.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class LikeIconFilled extends LitElement {
	static styles = [ SidebarButtonStyles, AlertStyles ];

	render () {
		return html`
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.638H11.986C9.40301 21.59 1.95001 14.856 1.95001 8.478C1.95001 5.414 4.47501 2.724 7.35301 2.724C9.64301 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638Z" fill="#666666"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('like-icon-filled', LikeIconFilled);
