import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class FollowersStore extends EventEmitter {
	constructor() {
		super();
		this.followers = [];
	}

	getLastFollowers(channel, clientId) {
		axios.get('https://api.twitch.tv/kraken/channels/' + channel + '/follows?client_id=' + clientId).then((data) => {
			this.handleFollowers(data);
		})
		.catch(function (data) {
			console.error(data);
		});
	}

	handleFollowers(json) {
		if(json.data.follows) {
			const followsLength = Object.keys(json.data.follows).length;
			this.followers.push(...json.data.follows);
		}
		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'GET_FOLLOWERS': {
				this.getLastFollowers(action.channel, action.clientId);
			}
		}
	}

	returnFollower() {
		return this.followers;
	}
}

const followersStore = new FollowersStore;
dispatcher.register(followersStore.handleActions.bind(followersStore));

export default followersStore;