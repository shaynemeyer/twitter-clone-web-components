import { css } from '../../lit.js';

const ButtonBaseStyles = css`
  :host,
  div {
    display: inline-flex;
    align-items: center;
    text-align: center;
    border-radius: 50px;
    font-weight: var(--bold-weight);
    cursor: pointer;
    color: var(--gray-100);
  }
`;

export default ButtonBaseStyles;