import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownSpaces extends LitElement {
  static styles = [DefaultStyles, DarkStyles, DropdownStyles];

  render() {
    return html`
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.13599 19.09L4.49599 22.73C4.34599 22.88 4.15599 22.9501 3.96599 22.9501C3.77599 22.9501 3.58599 22.88 3.43599 22.73C3.14599 22.44 3.14599 21.9601 3.43599 21.67L7.07599 18.0301C7.37599 17.7301 7.84599 17.7301 8.13599 18.0301C8.43599 18.3201 8.43599 18.7901 8.13599 19.09ZM22.306 1.49005C22.026 1.21005 21.646 1.05005 21.246 1.05005C21.246 1.05005 21.156 1.05005 21.116 1.06005C16.806 1.44005 12.746 3.38005 9.71599 6.51005H9.70599C7.02599 7.05005 4.58599 8.37005 2.61599 10.35L1.68599 11.28C1.22599 11.75 1.11599 12.46 1.41599 13.04C1.68599 13.54 2.19599 13.84 2.74599 13.84C2.83599 13.84 2.92599 13.83 3.01599 13.81L6.99599 13.08C7.58599 14.05 9.25599 15.95 10.816 16.86L10.086 20.91C9.96599 21.55 10.286 22.2001 10.866 22.5C11.086 22.6201 11.326 22.67 11.556 22.67C11.956 22.67 12.336 22.5201 12.626 22.23L13.566 21.2901C15.526 19.3001 16.836 16.81 17.366 14.08L17.436 14.02C17.436 14.01 17.476 13.98 17.476 13.97C20.486 10.94 22.356 6.93005 22.746 2.68005C22.786 2.24005 22.626 1.80005 22.306 1.49005ZM16.416 12.92C16.266 13.06 16.116 13.2 15.976 13.34V13.36C15.566 15.96 14.346 18.36 12.496 20.23L11.566 21.17L12.446 16.28C12.486 16.06 12.366 15.86 12.166 15.76C11.136 15.26 8.51599 12.89 8.04599 11.79C7.95599 11.56 7.72599 11.42 7.48599 11.46L2.74599 12.34L3.67599 11.4C5.52599 9.55005 7.90599 8.31005 10.466 7.90005C10.606 7.73005 10.766 7.57005 10.926 7.42005C13.806 4.52005 17.476 2.89005 21.246 2.55005C20.906 6.32005 19.296 10.02 16.416 12.92ZM6.01599 16.97L4.48599 18.5C4.33599 18.64 4.14599 18.72 3.95599 18.72C3.76599 18.72 3.57599 18.64 3.42599 18.5C3.13599 18.21 3.13599 17.7301 3.42599 17.4401L4.95599 15.9C5.25599 15.61 5.72599 15.61 6.01599 15.9C6.31599 16.2 6.31599 16.67 6.01599 16.97ZM17.546 6.36005C16.666 5.48005 15.246 5.48005 14.366 6.36005C13.486 7.24005 13.486 8.67005 14.366 9.54005C15.246 10.42 16.666 10.42 17.546 9.54005C18.426 8.67005 18.426 7.24005 17.546 6.36005ZM16.486 8.48005C16.196 8.78005 15.716 8.78005 15.426 8.48005C15.136 8.19005 15.136 7.71005 15.426 7.42005C15.716 7.13005 16.196 7.13005 16.486 7.42005C16.776 7.71005 16.776 8.19005 16.486 8.48005Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Spaces</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-spaces', DropdownSpaces);
