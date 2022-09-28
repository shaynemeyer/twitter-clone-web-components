import { css } from '../../lit.js';

const SidebarButtonStyles = css`
  :host,
  div {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 100ms ease-out;
  }

  div {
    padding: 12px;
  }
`;

export default SidebarButtonStyles;
