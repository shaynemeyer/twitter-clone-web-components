import { LitElement, html } from '../../lit.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class RetweetIconFilled extends LitElement {
	static styles = [ SidebarButtonStyles, SuccessStyles ];

	render () {
		return html`
    <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.562 18.5H7.36202C6.50802 18.5 5.81202 17.805 5.81202 16.95V7.54698L7.13802 8.87298C7.37202 9.10798 7.68002 9.22498 7.98602 9.22498C8.29202 9.22498 8.60002 9.10798 8.83602 8.87298C9.30402 8.40298 9.30402 7.64298 8.83602 7.17598L5.46002 3.79997C4.99002 3.33197 4.23002 3.33197 3.76302 3.79997L0.388022 7.17698C-0.0819775 7.64698 -0.0819775 8.40697 0.388022 8.87397C0.858022 9.34097 1.61802 9.34398 2.08502 8.87397L3.41002 7.54698V16.95C3.41002 19.128 5.18302 20.9 7.36002 20.9H12.56C13.224 20.9 13.76 20.362 13.76 19.7C13.76 19.038 13.225 18.5 12.562 18.5ZM23.615 15.477C23.145 15.007 22.385 15.007 21.918 15.477L20.592 16.803V7.39998C20.592 5.22198 18.82 3.44997 16.642 3.44997H11.442C10.779 3.44997 10.242 3.98797 10.242 4.64997C10.242 5.31197 10.779 5.84997 11.442 5.84997H16.642C17.496 5.84997 18.192 6.54498 18.192 7.39998V16.803L16.866 15.477C16.396 15.007 15.636 15.007 15.169 15.477C14.702 15.947 14.699 16.707 15.169 17.174L18.543 20.549C18.777 20.782 19.085 20.899 19.393 20.899C19.701 20.899 20.006 20.783 20.241 20.549L23.616 17.173C24.083 16.703 24.083 15.944 23.615 15.477ZM23.614 15.476L23.615 15.477L23.614 15.476Z" fill="#666666"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('retweet-icon-filled', RetweetIconFilled);