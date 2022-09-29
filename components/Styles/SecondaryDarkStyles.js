import { css } from '../../lit.js';

const SecondaryDarkStyles = css`
  :host(.dark) svg path {
    fill: var(--primary-70);
  }

  :host(.dark) {
    background-color: var(--transparent-10);
    color: var(--gray-100);
  }

  :host(.dark:hover) {
    background-color: var(--transparent-25);
  }
`;

export default SecondaryDarkStyles;
