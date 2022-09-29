import TrendingInfoData from '../Data/TrendingInfoData.js';

const trendingInfoContainer = document.querySelector('.trending-info');

const trendingInfoMapped = TrendingInfoData.map((item) => {
  return `<trending-info
					image="${item.imageUrl}"
					username="${item.account}"
					content="${item.content}"
					time="${item.time}"
					hashtag="${item.hashtag}"
					class="default"
				></trending-info>`;
}).join('');

trendingInfoContainer.innerHTML = trendingInfoMapped;
