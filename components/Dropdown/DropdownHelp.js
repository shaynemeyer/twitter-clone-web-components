import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownHelp extends LitElement {
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
            d="M12.025 22.75C6.09699 22.75 1.27499 17.928 1.27499 12C1.27499 6.072 6.09799 1.25 12.025 1.25C17.952 1.25 22.775 6.072 22.775 12C22.775 17.928 17.953 22.75 12.025 22.75ZM12.025 2.75C6.92499 2.75 2.77499 6.9 2.77499 12C2.77499 17.1 6.92499 21.25 12.025 21.25C17.125 21.25 21.275 17.1 21.275 12C21.275 6.9 17.125 2.75 12.025 2.75ZM13.064 17.47C13.064 16.854 12.566 16.356 11.95 16.356C11.334 16.356 10.836 16.854 10.836 17.47C10.836 18.085 11.334 18.584 11.95 18.584C12.566 18.584 13.064 18.084 13.064 17.47ZM16.145 9.942C16.145 7.63 14.263 5.748 11.951 5.748C9.63899 5.748 7.75699 7.63 7.75699 9.942C7.75699 10.356 8.09299 10.692 8.50699 10.692C8.92099 10.692 9.25699 10.356 9.25699 9.942C9.25699 8.457 10.467 7.248 11.952 7.248C13.438 7.248 14.647 8.458 14.647 9.942C14.647 11.428 13.437 12.637 11.953 12.637C11.54 12.637 11.203 12.973 11.203 13.387V14.524C11.203 14.938 11.54 15.274 11.953 15.274C12.366 15.274 12.703 14.938 12.703 14.524V14.061C14.658 13.707 16.148 12.001 16.148 9.943L16.145 9.942Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Help</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-help', DropdownHelp);
