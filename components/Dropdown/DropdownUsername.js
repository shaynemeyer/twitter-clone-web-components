import { LitElement, html, css } from '../../lit.js';
import SidebarUsernameStyles from '../Sidebar/SidebarUsernameStyles.js';
import '../Styles/TypeStyle.js';

class DropdownUsername extends LitElement {
  static styles = [
    css`
      :host,
      div {
        width: 320px;
        overflow: clip;
        border-radius: 16px;
      }
    `,
    SidebarUsernameStyles,
  ];

  static properties = {
    imageSrc: { type: String, attribute: 'image' },
    username: { type: String, attribute: 'username' },
    account: { type: String, attribute: 'account' },
  };

  constructor() {
    super();
    this.imageSrc = '';
    this.username = 'Username';
    this.account = '@account';
  }

  render() {
    return html`
      <div>
        <img src=${this.imageSrc} />
        <section>
          <type-style class="size-16px bold" username=${this.username}>
            ${this.username}
          </type-style>
          <type-style class="size-14px regular" account=${this.account}>
            ${this.account}
          </type-style>
        </section>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99995 20C8.73595 20 8.47995 19.896 8.29295 19.707L3.50795 14.922C3.11795 14.532 3.11795 13.899 3.50795 13.508C3.89795 13.117 4.53095 13.118 4.92195 13.508L8.86795 17.453L18.075 4.40997C18.395 3.95997 19.015 3.85197 19.47 4.16997C19.92 4.48797 20.03 5.11197 19.71 5.56397L9.81695 19.577C9.64695 19.817 9.37895 19.972 9.08495 19.997C9.05695 19.999 9.02795 20 8.99995 20Z"
            fill="#00BA18"
          />
        </svg>
      </div>
    `;
  }
}

customElements.define('dropdown-username', DropdownUsername);
