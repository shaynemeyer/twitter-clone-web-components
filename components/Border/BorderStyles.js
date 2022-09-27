import { css } from '../../lit.js';

const BorderStyles = css`
  :host {
    display: flex;
  }

  :host(.dark) svg rect {
    fill: var(--secondary-25);
  }

  :host(.default) svg rect {
    fill: var(--gray-95);
  }
`;

export default BorderStyles;
