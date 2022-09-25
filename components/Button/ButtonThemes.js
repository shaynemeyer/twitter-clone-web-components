import { css } from '../../lit.js';

const ButtonThemes = css`
  :host(.default) {
    background-color: var(--primary-50);
  }

  :host(.default:hover) {
    background-color: var(--primary-40);
  }

  :host(.dark) {
    background-color: var(--transparent-10);
  }

  :host(.dark:hover) {
    background-color: var(--transparent-25);
  }
`;

export default ButtonThemes;
