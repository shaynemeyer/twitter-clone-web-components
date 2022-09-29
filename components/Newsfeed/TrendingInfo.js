import { LitElement, html, css } from '../../lit.js';
import SecondaryDarkStyles from '../Styles/SecondaryDarkStyles.js';
import SecondaryStyles from '../Styles/SecondaryStyles.js';
import SidebarUsernameStyles from '../Sidebar/SidebarUsernameStyles.js';
import ButtonNestedStyles from '../Button/ButtonNestedStyles.js';
import '../Styles/TypeStyle.js';

class TrendingInfo extends LitElement {
  static styles = [
    SidebarUsernameStyles,
    SecondaryDarkStyles,
    SecondaryStyles,
    ButtonNestedStyles,
    css`
      :host img {
        width: 72px;
        height: 72px;
        border-radius: 16px;
        object-fit: cover;
      }

      @media (max-width: 1320px) {
        :host img {
          width: 100%;
          height: auto;
        }
      }

      :host,
      div.wrapper {
        justify-content: space-between;
      }

      :host section {
        gap: 8px;
        flex-basis: 240px;
      }

      #usernameOfficial,
      #trending {
        padding: 0px;
        gap: 8px;
      }

      :host(.default) #newsFeedContent {
        color: var(--secondary-40);
      }

      :host(.default) #trending type-style:first-child {
        color: var(--secondary-50);
      }

      :host(.default) #trending type-style:last-child {
        color: var(--primary-50);
      }

      :host(.dark) #trending type-style:last-child {
        color: var(--primary-70);
      }
    `,
  ];

  static properties = {
    imageSrc: { type: String, attribute: 'image' },
    username: { type: String, attribute: 'username' },
    content: { type: String, attribute: 'content' },
    timestamp: { type: String, attribute: 'time' },
    hashtag: { type: String, attribute: 'hashtag' },
  };

  constructor() {
    super();
    this.imageSrc = '';
    this.username = 'Username';
    this.content = 'Sample content goes here';
    this.timestamp = '5h';
    this.hashtag = '#world news';
  }

  render() {
    return html`
      <div class="wrapper">
        <section>
          <div id="usernameOfficial">
            <type-style class="size-16px bold" username=${this.username}>
              ${this.username}
            </type-style>
            <type-style class="size-14px regular" time=${this.timestamp}>
              ${this.timestamp}
            </type-style>
          </div>
          <type-style
            id="newsFeedContent"
            class="size-14px-body regular"
            content=${this.content}
          >
            ${this.content}
          </type-style>
          <div id="trending">
            <type-style class="size-14px regular" label="Trending"></type-style>
            <type-style class="size-14px bold" time=${this.hashtag}>
              ${this.hashtag}
            </type-style>
          </div>
        </section>

        <img src=${this.imageSrc} />
      </div>
    `;
  }
}

customElements.define('trending-info', TrendingInfo);
