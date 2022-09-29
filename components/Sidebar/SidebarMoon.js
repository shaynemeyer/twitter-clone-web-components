import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonStyles.js';

export class SidebarMoon extends LitElement {
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
        d="M9.37 5.51C9.19 6.15 9.1 6.82 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.45 17.19 14.93 19 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51ZM12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
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
        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-moon', SidebarMoon);
