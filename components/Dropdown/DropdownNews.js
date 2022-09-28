import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownNews extends LitElement {
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
            d="M21.5 11.25H18.25V4.25C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25V19.75C1.75 20.99 2.76 22 4 22H19.5C21.017 22 22.25 20.767 22.25 19.25V12C22.25 11.586 21.914 11.25 21.5 11.25ZM3.25 19.75V4.25C3.25 3.837 3.587 3.5 4 3.5H16C16.413 3.5 16.75 3.837 16.75 4.25V19.25C16.75 19.702 16.87 20.123 17.065 20.5H4C3.587 20.5 3.25 20.163 3.25 19.75ZM19.5 20.5C18.81 20.5 18.25 19.94 18.25 19.25V12.75H20.75V19.25C20.75 19.94 20.19 20.5 19.5 20.5ZM10.75 15.25H6C5.586 15.25 5.25 15.586 5.25 16C5.25 16.414 5.586 16.75 6 16.75H10.75C11.164 16.75 11.5 16.414 11.5 16C11.5 15.586 11.164 15.25 10.75 15.25ZM14 11.25H6C5.586 11.25 5.25 11.586 5.25 12C5.25 12.414 5.586 12.75 6 12.75H14C14.414 12.75 14.75 12.414 14.75 12C14.75 11.586 14.414 11.25 14 11.25ZM14 7.25H6C5.586 7.25 5.25 7.586 5.25 8C5.25 8.414 5.586 8.75 6 8.75H14C14.414 8.75 14.75 8.414 14.75 8C14.75 7.586 14.414 7.25 14 7.25Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">News</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-news', DropdownNews);
