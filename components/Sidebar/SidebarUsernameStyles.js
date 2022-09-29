import { css } from '../../lit.js';

const SidebarUsernameStyles = css`
  :host,
  div {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    gap: 16px;
    align-items: center;
    border-radius: 16px;
    transition: all 100ms ease-out;
    cursor: pointer;
  }

  @media (max-width: 920px) {
    :host primary-button {
      width: 100%;
    }
  }

  div {
    padding: 16px;
  }

  :host img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

  :host section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  :host(.default) section type-style:first-child {
    color: var(--secondary-25);
  }

  :host(.default) section type-style:last-child {
    color: var(--secondary-40);
  }

  :host(.dark) section type-style:first-child,
  :host(.dark) section type-style:last-child {
    color: var(--gray-100);
  }
`;

export default SidebarUsernameStyles;
