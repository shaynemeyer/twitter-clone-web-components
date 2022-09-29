import { css } from '../../lit.js';

const SuccessStyles = css`
  /* Light Theme */
  :host(.default) svg path {
    fill: var(--success-35);
  }

  :host(.default) {
    background-color: var(--transparent-0);
    color: var(--success-35);
  }

  :host(.default:hover) {
    background-color: var(--success-98);
  }

  :host(.default.active) {
    background-color: var(--success-95);
  }

  /* Dark theme */

  :host(.dark) svg path {
    fill: var(--success-60);
  }

  :host(.dark) {
    background-color: var(--transparent-0);
    color: var(--success-60);
  }

  :host(.dark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.dark.active) {
    background-color: var(--transparent-25);
  }
`;

export default SuccessStyles;
