import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class FollowersStore extends EventEmitter {
	constructor() {
		super();
		this.follower = {};
	}

	getLastFollower(channel, clientId) {
		axios.get('https://api.twitch.tv/kraken/channels/' + channel + '/follows?limit=1&client_id=' + clientId).then((data) => {
			this.handleFollower(data);
		})
		.catch(function (data) {
			console.error(data);
		});
	}

	handleFollower(json) {
		this.follower = json.data.follows[0].user;
		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'GET_FOLLOWER': {
				this.getLastFollower(action.channel, action.clientId);
			}
		}
	}

	returnFollower() {
		return this.follower;
	}
}

const followersStore = new FollowersStore;
dispatcher.register(followersStore.handleActions.bind(followersStore));

export default followersStore;