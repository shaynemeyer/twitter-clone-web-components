import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownAds extends LitElement {
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
            d="M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2H20.75C21.99 2 23 3.01 23 4.25V19.75C23 20.99 21.99 22 20.75 22ZM3.25 3.5C2.836 3.5 2.5 3.837 2.5 4.25V19.75C2.5 20.163 2.836 20.5 3.25 20.5H20.75C21.164 20.5 21.5 20.163 21.5 19.75V4.25C21.5 3.837 21.164 3.5 20.75 3.5H3.25ZM16.776 6.982H16.757H10.952C10.538 6.982 10.202 7.318 10.202 7.732C10.202 8.146 10.538 8.482 10.952 8.482H14.947L6.92 16.508C6.628 16.801 6.628 17.276 6.92 17.568C7.067 17.715 7.26 17.788 7.45 17.788C7.64 17.788 7.835 17.716 7.98 17.568L16.007 9.543V13.538C16.007 13.952 16.343 14.288 16.757 14.288C17.171 14.288 17.507 13.952 17.507 13.538V7.732C17.507 7.324 17.182 6.992 16.776 6.982Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Ads</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-ads', DropdownAds);
