import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from '../Styles/DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownShortcuts extends LitElement {
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
            d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75ZM9.828 14.817L8.208 18.159C8.07 18.569 8.291 19.016 8.703 19.154C9.115 19.292 9.561 19.071 9.699 18.659L11.301 15.483C11.581 14.926 12.377 14.927 12.657 15.483L14.265 18.678C14.403 19.088 14.849 19.31 15.261 19.172C15.673 19.034 15.894 18.588 15.756 18.176L14.136 14.834L14.168 14.904L14.045 14.642C13.562 13.615 13.51 12.452 13.885 11.402C13.991 11.1 14.277 10.897 14.597 10.897H16.629C17.063 10.897 17.415 10.544 17.415 10.11C17.415 9.676 17.063 9.324 16.629 9.324H7.37C6.935 9.324 6.583 9.676 6.583 10.11C6.583 10.544 6.935 10.896 7.369 10.896H9.354C9.674 10.896 9.96 11.096 10.067 11.399C10.441 12.449 10.39 13.613 9.909 14.639L9.784 14.902L9.828 14.817ZM12 8.563C13.043 8.563 13.889 7.717 13.889 6.674C13.889 5.631 13.043 4.785 12 4.785C10.957 4.785 10.111 5.631 10.111 6.674C10.111 7.717 10.957 8.563 12 8.563Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Shortcuts</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-shortcuts', DropdownShortcuts);
