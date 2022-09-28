import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonsStyles.js';
import '../Styles/TypeStyle.js';
export class SidebarNotification extends LitElement {
  static styles = [DefaultStyles, DarkStyles, SidebarButtonStyles];

  static properties = {
    toggle: { type: Boolean },
  };

  constructor() {
    super();
    this.toggle = true;
  }

  svgOutline() {
    return html` <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.906 18.782 5.656 17.247 4.103C15.872 2.71 14.01 1.94 12.005 1.93H11.992C9.988 1.94 8.126 2.71 6.75 4.104C5.216 5.657 4.382 7.906 4.404 10.438C4.441 14.768 2.384 16.405 2.302 16.468C2.042 16.661 1.936 16.998 2.037 17.306C2.139 17.614 2.427 17.821 2.749 17.821H7.669C7.771 20.131 9.666 21.981 11.999 21.981C14.332 21.981 16.225 20.131 16.326 17.821H21.248C21.57 17.821 21.858 17.615 21.958 17.307C22.061 17 21.955 16.662 21.695 16.469L21.697 16.468ZM12 20.478C10.495 20.478 9.27 19.301 9.172 17.82H14.828C14.728 19.3 13.505 20.48 12 20.48V20.478ZM4.38 16.32C5.12 15.188 5.928 13.292 5.904 10.424C5.886 8.264 6.548 6.442 7.817 5.157C8.91 4.05 10.397 3.437 12 3.43C13.603 3.438 15.087 4.05 16.18 5.158C17.45 6.443 18.113 8.264 18.095 10.425C18.071 13.293 18.88 15.19 19.62 16.321H4.38V16.32Z"
        fill="black"
      />
    </svg>`;
  }

  svgFilled() {
    return html` <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.905 18.782 5.656 17.247 4.104C15.872 2.711 14.01 1.94 12.005 1.932H11.992C9.988 1.94 8.126 2.712 6.75 4.104C5.216 5.657 4.383 7.906 4.404 10.437C4.441 14.769 2.384 16.404 2.302 16.467C2.042 16.661 1.936 16.997 2.037 17.305C2.138 17.613 2.427 17.82 2.75 17.82H7.244C7.344 20.364 9.432 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.343 19.261 9.244 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}
        <type-style class="size-20px regular">Notification</type-style>
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-notification', SidebarNotification);
