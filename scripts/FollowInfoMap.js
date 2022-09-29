import FollowInfoData from '../Data/FollowInfoData.js';

const followInfoContainer = document.querySelector('.follow-info');

const followInfoMapped = FollowInfoData.map((item) => {
  return `<follow-info
					image="${item.imageUrl}"
					account="${item.account}"
					username="${item.username}"
					class="default"
				></follow-info>`;
}).join('');

followInfoContainer.innerHTML = followInfoMapped;
