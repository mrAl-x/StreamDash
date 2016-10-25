import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class FollowersStore extends EventEmitter {
	constructor() {
		super();
		this.followers = [];
		this.totalFollowers;
	}

	getTotalFollowers(channel, clientId) {
		const url = `https://api.twitch.tv/kraken/channels/${channel}?client_id=${clientId}`;

		axios.get(url).then((data) => {
			this.handleTotalFollowers(data.data.followers)
		})
		.catch(function (data) {
			console.error(data);
		});
	}

	getLastFollowers(channel, clientId) {
		const url = `https://api.twitch.tv/kraken/channels/${channel}/follows?client_id=${clientId}`;
		axios.get(url).then((data) => {
			this.handleFollowers(data);
		})
		.catch(function (data) {
			console.error(data);
		});
	}

	handleTotalFollowers(followers) {
		if (followers) {
			this.totalFollowers = followers;
		}
		this.emit('change');
	}

	handleFollowers(json) {
		if (json.data.follows) {
			const followsLength = Object.keys(json.data.follows).length;
			this.followers.push(...json.data.follows);
		}
		this.emit('change');
	}

	returnFollower() {
		return this.followers;
	}

	returnTotalFollowers() {
		return this.totalFollowers;
	}

	handleActions(action) {
		switch (action.type) {
			case 'GET_FOLLOWERS': {
				this.getLastFollowers(action.channel, action.clientId);
				break;
			}
			case 'GET_FOLLOWERS_NUMBER': {
				this.getTotalFollowers(action.channel, action.clientId);
				break;
			}
		}
	}
}

const followersStore = new FollowersStore;
dispatcher.register(followersStore.handleActions.bind(followersStore));

export default followersStore;