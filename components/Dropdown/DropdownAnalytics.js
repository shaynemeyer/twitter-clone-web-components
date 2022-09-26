import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from '../Styles/DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownAnalytics extends LitElement {
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
            d="M12 22C11.586 22 11.25 21.664 11.25 21.25V2.75C11.25 2.336 11.586 2 12 2C12.414 2 12.75 2.336 12.75 2.75V21.25C12.75 21.664 12.414 22 12 22ZM17.14 22C16.725 22 16.39 21.664 16.39 21.25V7.89C16.39 7.475 16.725 7.14 17.14 7.14C17.555 7.14 17.89 7.475 17.89 7.89V21.25C17.89 21.664 17.553 22 17.14 22ZM6.85999 22C6.44699 22 6.10999 21.664 6.10999 21.25V10.973C6.10999 10.559 6.44699 10.223 6.85999 10.223C7.27299 10.223 7.60999 10.559 7.60999 10.973V21.25C7.60999 21.664 7.27499 22 6.85999 22Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Analytics</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-analytics', DropdownAnalytics);
