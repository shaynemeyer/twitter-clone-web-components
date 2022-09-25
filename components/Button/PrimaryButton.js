import { LitElement, html } from '../../lit.js';
import ButtonSizeStyles from './ButtonSizeStyles.js';
import ButtonBaseStyles from './ButtonBaseStyles.js';
import ButtonThemes from './ButtonThemes.js';

class PrimaryButton extends LitElement {
  static properties = {
    buttonLabel: { type: String, attribute: 'label' },
  };

  constructor() {
    super();
    this.buttonLabel = 'Default Value';
  }

  static styles = [ButtonBaseStyles, ButtonThemes, ButtonSizeStyles];

  render() {
    return html` <div label=${this.buttonLabel}>${this.buttonLabel}</div> `;
  }
}

customElements.define('primary-button', PrimaryButton);
