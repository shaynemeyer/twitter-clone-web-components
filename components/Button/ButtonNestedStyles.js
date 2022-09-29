import { css } from '../../lit.js';

const ButtonNestedStyles = css`
  :host(.default) primary-button {
    background-color: var(--primary-50);
  }

  :host(.default:hover) primary-button {
    background-color: var(--primary-40);
  }

  :host(.dark) primary-button {
    background-color: var(--transparent-10);
  }

  :host(.dark:hover) primary-button {
    background-color: var(--transparent-25);
  }
`;

export default ButtonNestedStyles;
