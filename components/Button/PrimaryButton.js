import { LitElement, html, css } from '../../lit.js';

class PrimaryButton extends LitElement {
  static properties = {
    buttonLabel: { type: String, attribute: 'label' },
  };

  constructor() {
    super();
    this.buttonLabel = 'Default Value';
  }

  static styles = [
    css`
      :host,
      div {
        display: inline-flex;
        align-items: center;
        text-align: center;
        border-radius: 50px;
        font-weight: var(--bold-weight);
        text-align: left;
        cursor: pointer;
      }
      :host(.regular) {
        padding: 12px 16px;
        font-size: 14px;
        line-height: 14px;
      }

      :host(.large) {
        padding: 16px;
        font-size: 20px;
        line-height: 20px;
      }

      :host(.default) {
        background-color: var(--primary-50);
        color: var(--gray-100);
      }

      :host(.default:hover) {
        background-color: var(--primary-40);
      }

      :host(.dark) {
        background-color: var(--transparent-10);
        color: var(--gray-100);
      }

      :host(.dark:hover) {
        background-color: var(--transparent-25);
      }
    `,
  ];

  render() {
    return html` <div label=${this.buttonLabel}>${this.buttonLabel}</div> `;
  }
}

customElements.define('primary-button', PrimaryButton);
