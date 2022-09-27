import { LitElement, html } from '../../lit.js';
import BorderStyles from './BorderStyles.js';

class VerticalBorder extends LitElement {
  static styles = [BorderStyles];

  render() {
    return html`
      <svg
        width="1px"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1px" height="100%" fill="#F2F2F2" />
      </svg>
    `;
  }
}

customElements.define('vertical-border', VerticalBorder);
