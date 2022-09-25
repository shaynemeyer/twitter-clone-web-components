import { css } from '../../lit.js';

const ButtonSizeStyles = css`
  :host(.large) {
    padding: 16px;
    font-size: 20px;
    line-height: 20px;
  }

  :host(.regular) {
    padding: 12px 16px;
    font-size: 14px;
    line-height: 14px;
  }
`;

export default ButtonSizeStyles;
