import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonsStyles.js';
import '../Styles/TypeStyle.js';

export class SidebarProfile extends LitElement {
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
        d="M12 11.816C13.355 11.816 14.872 11.666 15.84 10.56C16.654 9.63 16.918 8.192 16.646 6.168C16.266 3.343 14.529 1.656 12 1.656C9.471 1.656 7.734 3.343 7.354 6.17C7.082 8.192 7.346 9.63 8.16 10.56C9.128 11.667 10.645 11.816 12 11.816ZM8.84 6.368C9.002 5.168 9.627 3.156 12 3.156C14.373 3.156 14.998 5.169 15.16 6.368C15.367 7.918 15.217 8.995 14.71 9.573C14.255 10.093 13.444 10.316 12 10.316C10.556 10.316 9.745 10.093 9.29 9.573C8.783 8.995 8.633 7.917 8.84 6.368ZM20.28 19.236C19.403 15.71 15.998 13.246 12 13.246C8.002 13.246 4.597 15.71 3.72 19.236C3.548 19.928 3.692 20.636 4.115 21.176C4.523 21.696 5.155 21.996 5.848 21.996H18.152C18.845 21.996 19.477 21.696 19.885 21.176C20.309 20.636 20.452 19.929 20.279 19.236H20.28ZM18.704 20.252C18.578 20.412 18.388 20.498 18.152 20.498H5.848C5.613 20.498 5.422 20.413 5.296 20.252C5.159 20.078 5.116 19.84 5.176 19.598C5.886 16.743 8.693 14.748 12 14.748C15.307 14.748 18.114 16.742 18.824 19.598C18.884 19.84 18.841 20.078 18.704 20.252Z"
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
        d="M12.225 12.165C10.869 12.165 9.353 12.015 8.385 10.909C7.571 9.979 7.308 8.541 7.58 6.517C7.96 3.691 9.696 2.004 12.226 2.004C14.756 2.004 16.493 3.691 16.872 6.517C17.144 8.541 16.88 9.977 16.066 10.909C15.096 12.015 13.581 12.164 12.226 12.164L12.225 12.165ZM18.074 22.015H6.376C5.713 22.015 5.126 21.735 4.726 21.229C4.304 20.695 4.15 19.959 4.316 19.261C5.15 15.731 8.402 13.264 12.224 13.264C16.046 13.264 19.298 15.73 20.134 19.261C20.298 19.959 20.144 20.695 19.722 21.228C19.322 21.733 18.737 22.013 18.074 22.013V22.015Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}

        <type-style class="size-20px regular">Profile</type-style>
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-profile', SidebarProfile);
