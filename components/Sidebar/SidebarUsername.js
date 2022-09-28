import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarUsernameStyles from './SidebarUsernameStyles.js';
import '../Styles/TypeStyle.js';

export class SidebarUsername extends LitElement {
  static styles = [SidebarUsernameStyles, DefaultStyles, DarkStyles];

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
            d="M6 13.5C6.828 13.5 7.5 12.828 7.5 12C7.5 11.172 6.828 10.5 6 10.5C5.172 10.5 4.5 11.172 4.5 12C4.5 12.828 5.172 13.5 6 13.5ZM12 13.5C12.828 13.5 13.5 12.828 13.5 12C13.5 11.172 12.828 10.5 12 10.5C11.172 10.5 10.5 11.172 10.5 12C10.5 12.828 11.172 13.5 12 13.5ZM18 13.5C18.828 13.5 19.5 12.828 19.5 12C19.5 11.172 18.828 10.5 18 10.5C17.172 10.5 16.5 11.172 16.5 12C16.5 12.828 17.172 13.5 18 13.5Z"
            fill="#264459"
          />
        </svg>
      </div>
    `;
  }
}
customElements.define('sidebar-username', SidebarUsername);
