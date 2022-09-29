import { css } from '../../lit.js';

const PrimaryStyles = css`
  /* Light theme */

  :host(.default) svg path {
    fill: var(--primary-50);
  }

  :host(.default) {
    background-color: var(--transparent-0);
    color: var(--primary-50);
  }

  :host(.default:hover) {
    background-color: var(--primary-98);
  }

  :host(.default.active) {
    background-color: var(--primary-95);
  }

  /* Dark theme */

  :host(.dark) svg path {
    fill: var(--primary-70);
  }

  :host(.dark) {
    background-color: var(--transparent-0);
    color: var(--primary-70);
  }

  :host(.dark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.dark.active) {
    background-color: var(--transparent-25);
  }
`;

export default PrimaryStyles;
