import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonsStyles.js';
import '../Styles/TypeStyle.js';

export class SidebarMore extends LitElement {
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
        d="M17 13.5C17.8284 13.5 18.5 12.8284 18.5 12C18.5 11.1716 17.8284 10.5 17 10.5C16.1716 10.5 15.5 11.1716 15.5 12C15.5 12.8284 16.1716 13.5 17 13.5Z"
        fill="black"
      />
      <path
        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
        fill="black"
      />
      <path
        d="M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z"
        fill="black"
      />
      <path
        d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 13.5C6.17 13.5 5.5 12.83 5.5 12C5.5 11.17 6.17 10.5 7 10.5C7.83 10.5 8.5 11.17 8.5 12C8.5 12.83 7.83 13.5 7 13.5ZM12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5ZM17 13.5C16.17 13.5 15.5 12.83 15.5 12C15.5 11.17 16.17 10.5 17 10.5C17.83 10.5 18.5 11.17 18.5 12C18.5 12.83 17.83 13.5 17 13.5Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}
        <type-style class="size-20px regular">More</type-style>
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-more', SidebarMore);
