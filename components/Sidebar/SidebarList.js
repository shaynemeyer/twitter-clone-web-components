import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from '../Styles/SidebarButtonsStyles.js';
import '../Styles/TypeStyle.js';

export class SidebarList extends LitElement {
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
        d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2H19.75C20.99 2 22 3.01 22 4.25V19.75C22 20.99 20.99 22 19.75 22ZM4.25 3.5C3.836 3.5 3.5 3.837 3.5 4.25V19.75C3.5 20.163 3.836 20.5 4.25 20.5H19.75C20.164 20.5 20.5 20.163 20.5 19.75V4.25C20.5 3.837 20.164 3.5 19.75 3.5H4.25Z"
        fill="black"
      />
      <path
        d="M17 8.64H7C6.586 8.64 6.25 8.303 6.25 7.89C6.25 7.477 6.586 7.14 7 7.14H17C17.414 7.14 17.75 7.475 17.75 7.89C17.75 8.305 17.414 8.64 17 8.64ZM17 12.75H7C6.586 12.75 6.25 12.414 6.25 12C6.25 11.586 6.586 11.25 7 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75ZM12 16.86H7C6.586 16.86 6.25 16.525 6.25 16.11C6.25 15.695 6.586 15.36 7 15.36H12C12.414 15.36 12.75 15.697 12.75 16.11C12.75 16.523 12.414 16.86 12 16.86Z"
        fill="black"
      />
    </svg>`;
  }

  svgFilled() {
    return html`<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.75 2H4.25C3.013 2 2 3.013 2 4.25V19.75C2 20.987 3.013 22 4.25 22H19.75C20.987 22 22 20.987 22 19.75V4.25C22 3.013 20.987 2 19.75 2ZM11 16.75H7C6.586 16.75 6.25 16.414 6.25 16C6.25 15.586 6.586 15.25 7 15.25H11C11.414 15.25 11.75 15.586 11.75 16C11.75 16.414 11.414 16.75 11 16.75ZM17 12.75H7C6.586 12.75 6.25 12.414 6.25 12C6.25 11.586 6.586 11.25 7 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75ZM17 8.75H7C6.586 8.75 6.25 8.414 6.25 8C6.25 7.586 6.586 7.25 7 7.25H17C17.414 7.25 17.75 7.586 17.75 8C17.75 8.414 17.414 8.75 17 8.75Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}
        <type-style class="size-20px regular">Lists</type-style>
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-list', SidebarList);
