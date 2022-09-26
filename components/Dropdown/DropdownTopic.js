import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from '../Styles/DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownTopic extends LitElement {
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
            d="M12.003 23.274C11.92 23.274 11.836 23.26 11.755 23.232C11.455 23.127 11.253 22.842 11.253 22.524V18.384C9.17299 18.212 7.23998 17.318 5.74698 15.824C2.29698 12.374 2.29698 6.76205 5.74698 3.31405C9.19699 -0.133955 14.809 -0.135955 18.259 3.31405C21.355 6.41105 21.709 11.384 19.079 14.879L12.589 22.991C12.443 23.173 12.226 23.273 12.002 23.273L12.003 23.274ZM12.002 2.22405H12.003H12.002C10.121 2.22405 8.23998 2.94105 6.80798 4.37405C3.94398 7.23705 3.94398 11.898 6.80798 14.764C8.19598 16.151 10.041 16.914 12.003 16.914C12.417 16.914 12.753 17.251 12.753 17.664V20.384L17.895 13.959C20.065 11.074 19.771 6.94505 17.199 4.37205C15.765 2.94205 13.883 2.22405 12.002 2.22405ZM12.5 11.938H8.44998C8.03698 11.938 7.69998 11.602 7.69998 11.188C7.69998 10.774 8.03698 10.438 8.44998 10.438H12.5C12.914 10.438 13.25 10.774 13.25 11.188C13.25 11.602 12.914 11.938 12.5 11.938ZM15.55 8.70005H8.44998C8.03698 8.70005 7.69998 8.36305 7.69998 7.95005C7.69998 7.53705 8.03698 7.20005 8.44998 7.20005H15.55C15.963 7.20005 16.3 7.53505 16.3 7.95005C16.3 8.36505 15.963 8.70005 15.55 8.70005Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Topic</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-topic', DropdownTopic);
