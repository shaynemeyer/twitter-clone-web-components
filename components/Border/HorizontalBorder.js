import { LitElement, html } from '../../lit.js';
import BorderStyles from './BorderStyles.js';

class HorizontalBorder extends LitElement {
  static styles = [BorderStyles];

  render() {
    return html`
      <svg
        width="100%"
        height="1px"
        viewBox="0 0 320 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="1" fill="#F2F2F2" />
      </svg>
    `;
  }
}

customElements.define('horizontal-border', HorizontalBorder);
