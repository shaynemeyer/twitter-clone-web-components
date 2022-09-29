import { css } from '../../lit.js';

const GrayStyles = css`
  :host(.default) svg path {
    fill: var(--gray-40);
  }

  :host(.default) {
    background-color: var(--transparent-0);
    color: var(--gray-40);
  }

  :host(.default:hover) {
    background-color: var(--gray-98);
  }

  :host(.default.active) {
    background-color: var(--gray-95);
  }
`;

export default GrayStyles;
