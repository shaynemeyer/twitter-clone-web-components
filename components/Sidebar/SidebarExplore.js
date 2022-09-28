import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonsStyles.js';
import '../Styles/TypeStyle.js';

export class SidebarExplore extends LitElement {
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
        d="M21 7.337H17.07L17.442 3.065C17.478 2.653 17.172 2.29 16.76 2.253C16.343 2.223 15.984 2.523 15.948 2.936L15.565 7.336H9.245L9.615 3.066C9.652 2.653 9.345 2.29 8.935 2.253C8.515 2.223 8.158 2.523 8.122 2.936L7.74 7.336H3.782C3.368 7.336 3.032 7.673 3.032 8.086C3.032 8.499 3.368 8.836 3.782 8.836H7.61L7.06 15.163H3C2.586 15.163 2.25 15.499 2.25 15.913C2.25 16.327 2.586 16.663 3 16.663H6.93L6.558 20.935C6.522 21.347 6.828 21.71 7.24 21.747L7.306 21.75C7.691 21.75 8.018 21.455 8.052 21.064L8.435 16.664H14.755L14.385 20.934C14.349 21.347 14.655 21.71 15.067 21.747L15.133 21.75C15.518 21.75 15.845 21.455 15.879 21.064L16.261 16.664H20.218C20.631 16.664 20.968 16.327 20.968 15.914C20.968 15.501 20.631 15.164 20.218 15.164H16.39L16.94 8.837H21C21.414 8.837 21.75 8.501 21.75 8.087C21.75 7.673 21.414 7.337 21 7.337ZM14.885 15.163H8.565L9.115 8.837H15.435L14.885 15.163Z"
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
        d="M20.585 9.468C21.245 9.468 21.785 8.93 21.785 8.268C21.785 7.606 21.245 7.068 20.585 7.068H17.365L17.675 3.521C17.702 3.203 17.605 2.891 17.398 2.646C17.192 2.401 16.903 2.25 16.576 2.221C15.926 2.186 15.341 2.653 15.283 3.314L14.957 7.068H9.9L10.208 3.523C10.268 2.865 9.778 2.281 9.111 2.221C8.446 2.171 7.876 2.651 7.818 3.313L7.493 7.067H4.163C3.5 7.067 2.963 7.605 2.963 8.267C2.963 8.929 3.501 9.467 4.163 9.467H7.285L6.845 14.531H3.416C2.754 14.531 2.216 15.071 2.216 15.731C2.216 16.391 2.754 16.933 3.416 16.933H6.636L6.326 20.481C6.269 21.138 6.758 21.721 7.416 21.781L7.522 21.786C8.148 21.786 8.662 21.314 8.717 20.688L9.044 16.935H14.1L13.792 20.479C13.732 21.137 14.222 21.721 14.882 21.781L14.988 21.786C15.605 21.786 16.13 21.304 16.183 20.688L16.508 16.935H19.838C20.498 16.935 21.038 16.395 21.038 15.735C21.038 15.075 20.498 14.533 19.838 14.533H16.716L17.156 9.469H20.586L20.585 9.468ZM14.747 9.468L14.307 14.531H9.253L9.693 9.469H14.748L14.747 9.468Z"
        fill="black"
      />
    </svg>`;
  }

  render() {
    return html`
      <div @click=${this.switchToggle}>
        ${this.toggle ? this.svgOutline() : this.svgFilled()}
        <type-style class="size-20px regular">Explore</type-style>
      </div>
    `;
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-explore', SidebarExplore);
