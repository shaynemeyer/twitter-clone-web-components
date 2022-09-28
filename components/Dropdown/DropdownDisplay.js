import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

export class DropdownDisplay extends LitElement {
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
            d="M17.45 22.2801H3.673C2.525 22.2801 1.59 21.3341 1.59 20.1701V7.92606C1.59 6.76106 2.524 5.81406 3.672 5.81406H9.508C9.922 5.81406 10.258 6.15006 10.258 6.56406C10.258 6.97806 9.922 7.31406 9.508 7.31406H3.672C3.352 7.31406 3.089 7.58806 3.089 7.92606V20.1701C3.089 20.5061 3.349 20.7801 3.671 20.7801H17.451C17.771 20.7801 18.034 20.5071 18.034 20.1701V13.8901C18.034 13.4751 18.37 13.1401 18.784 13.1401C19.198 13.1401 19.534 13.4751 19.534 13.8901V20.1701C19.534 21.3331 18.6 22.2801 17.45 22.2801ZM7.572 17.1431C7.382 17.2971 7.096 17.1751 7.068 16.9331C6.931 15.7191 6.834 12.8801 8.551 10.9901C9.459 9.99006 11.571 9.47006 13.026 10.7921C14.481 12.1141 14.166 14.2651 13.256 15.2651C11.186 17.4151 9.828 15.3231 7.57 17.1431H7.572ZM15.692 11.2051L22.075 3.98906C22.525 3.53906 22.525 2.80906 22.075 2.36106C21.625 1.91106 20.897 1.91106 20.448 2.36106L13.216 8.76306C13.216 8.76306 13.998 8.86906 14.811 9.69306C15.359 10.2511 15.693 11.2031 15.693 11.2031L15.692 11.2051Z"
            fill="#172936"
          />
        </svg>

        <type-style class="size-20px regular">Display</type-style>
      </div>
    `;
  }
}
customElements.define('dropdown-display', DropdownDisplay);
