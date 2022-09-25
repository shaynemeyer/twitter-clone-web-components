import { LitElement, html, css } from '../../lit.js';

class TypeStyle extends LitElement {
  static properties = {
    textValue: { type: String, attribute: 'label' },
  };

  constructor() {
    super();
    this.textValue = 'Default Value';
  }

  static styles = [
    css`
      :host,
      p {
        padding: 0;
        margin: 0;
        font-style: normal;
        text-decoration: none;
      }

      :host(.regular) {
        font-weight: var(--regular-weight);
      }

      :host(.bold) {
        font-weight: var(--bold-weight);
      }

      :host(.size-20px) {
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0;
      }

      :host(.size-16px) {
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.25px;
      }

      :host(.size-14px) {
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.25px;
      }

      :host(.size-16px-body) {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.25px;
      }

      :host(.size-14px-body) {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.25px;
      }
    `,
  ];

  render() {
    return html`
      <p label=${this.textValue}>
        <slot>${this.textValue}</slot>
      </p>
    `;
  }
}
customElements.define('type-style', TypeStyle);
