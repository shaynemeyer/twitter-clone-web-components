import { LitElement, html } from '../../lit.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class LikeIcon extends LitElement {
	static styles = [ SidebarButtonStyles, AlertStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00002 16.2285H8.98952C7.05227 16.1925 1.46252 11.142 1.46252 6.35853C1.46252 4.06053 3.35627 2.04303 5.51477 2.04303C7.23227 2.04303 8.38727 3.22803 8.99927 4.09053C9.60977 3.22953 10.7648 2.04303 12.483 2.04303C14.643 2.04303 16.536 4.06053 16.536 6.35928C16.536 11.1413 10.9455 16.1918 9.00827 16.227H9.00002V16.2285ZM5.51552 3.16878C3.95552 3.16878 2.58827 4.65978 2.58827 6.36003C2.58827 10.665 7.86377 15.057 9.00077 15.1035C10.1393 15.057 15.4133 10.6658 15.4133 6.36003C15.4133 4.65978 14.046 3.16878 12.486 3.16878C10.59 3.16878 9.53102 5.37078 9.52202 5.39253C9.34952 5.81403 8.65502 5.81403 8.48177 5.39253C8.47127 5.37003 7.41302 3.16878 5.51627 3.16878H5.51552Z" fill="#666666"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('like-icon', LikeIcon);
