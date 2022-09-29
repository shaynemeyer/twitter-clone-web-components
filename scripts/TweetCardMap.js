import TweetCardData from '../Data/TweetCardData.js';

const tweetContainer = document.querySelector('#tweet');

const tweetCardMapped = TweetCardData.map((item) => {
  return `<div class="tweet-card">
					<header>
						<img
							class="image-style"
							src="${item.profile}"
						>
						<div>
							<${item.svg}-icon-filled class="default"></${item.svg}-icon-filled>
							<type-style
								label="${item.svgString}"
								class="default ${item.svg === 'like' ? 'alert' : 'success'} size-14px bold"
							></type-style>
						</div>
					</header>
					<section>
						<div>
							<type-style
								label="${item.account}"
								class="default size-20px bold"
							></type-style>
							<official-icon class="default"></official-icon>
							<type-style
								label="${item.username}"
								class="default gray size-14px regular"
							></type-style>
							<type-style
								label="${item.time}"
								class="default gray size-14px regular"
							></type-style>
						</div>
						<div>
							<menu-icon class="default"></menu-icon>
						</div>
					</section>
					<div class="tweet-content">
						<type-style
							label="${item.content}"
							class="default gray size-16px-body"
						></type-style>
						<img src="${item.imageUrl}">
					</div>
					<footer>
						<div>
							<comment-icon class="default"></comment-icon>
							<type-style
								label="${item.comment}"
								class="default primary size-14px-body"
							></type-style>
						</div>
						<div>
							<retweet-icon class="default"></retweet-icon>
							<type-style
								label="${item.retweet}"
								class="default success size-14px-body"
							></type-style>
						</div>
						<div>
							<like-icon class="default"></like-icon>
							<type-style
								label="${item.like}"
								class="default alert size-14px-body"
							></type-style>
						</div>
						<div>
							<share-icon class="default"></share-icon>
						</div>
					</footer>
				</div>`;
}).join('');

tweetContainer.innerHTML = tweetCardMapped;
