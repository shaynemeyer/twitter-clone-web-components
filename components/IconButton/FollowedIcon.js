import { LitElement, html } from '../../lit.js';
import GrayStyles from '../Styles/GrayStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class FollowedIcon extends LitElement {
	static styles = [ SidebarButtonStyles, GrayStyles ];

	render () {
		return html`
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.225 12.165C10.869 12.165 9.35301 12.015 8.38501 10.909C7.57101 9.97903 7.30801 8.54103 7.58001 6.51703C7.96001 3.69103 9.69601 2.00403 12.226 2.00403C14.756 2.00403 16.493 3.69103 16.872 6.51703C17.144 8.54103 16.88 9.97703 16.066 10.909C15.096 12.015 13.581 12.164 12.226 12.164L12.225 12.165ZM18.074 22.015H6.37601C5.71301 22.015 5.12601 21.735 4.72601 21.229C4.30401 20.695 4.15001 19.959 4.31601 19.261C5.15001 15.731 8.40201 13.264 12.224 13.264C16.046 13.264 19.298 15.73 20.134 19.261C20.298 19.959 20.144 20.695 19.722 21.228C19.322 21.733 18.737 22.013 18.074 22.013V22.015Z" fill="#666666"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('followed-icon', FollowedIcon);
