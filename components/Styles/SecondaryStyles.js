import { css } from '../../lit.js';

const SecondaryStyles = css`
  :host(.default) svg path {
    fill: var(--primary-50);
  }

  :host(.default) {
    background-color: var(--secondary-98);
    color: var(--secondary-15);
  }

  :host(.default:hover) {
    background-color: var(--secondary-95);
  }
`;

export default SecondaryStyles;
