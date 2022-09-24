import { css } from '../../lit.js';

const DefaultStyles = css`
  :host(.default) svg path {
    fill: var(--secondary-15);
  }

  :host(.default) {
    background-color: var(--gray-100);
    color: var(--secondary-15);
  }

  :host(.default:hover) {
    background-color: var(--primary-98);
  }

  :host(.default.active) {
    background-color: var(--primary-90);
  }

  :host(.default.active) p {
    font-weight: var(--bold-weight);
  }
`;

export default DefaultStyles;
