import { EventEmitter } from 'events';
import axios from 'axios'

import dispatcher from '../dispatcher';

class ChangeStore extends EventEmitter {
	changeTitle(title) {
		let token = JSON.parse(sessionStorage.twitch_oauth_session).token;
		let clientId = sessionStorage.clientId;
		let channel = JSON.parse(sessionStorage.twitch).display_name;

		let twitch = {
			token,
			channel,
			clientId,
			title
		};

		axios.get('https://api.twitch.tv/kraken/channels/' + twitch.channel + '?oauth_token=' + twitch.token + '&client_id=' + twitch.clientId + '&channel[status]=' + twitch.title + '&_method=put').then((data) => {
			this.updateSession(twitch.title);
			console.log('Changes will be updated in a few seconds!');
		})
		.catch(function (data) {
			console.error(data);
		});
	}

	updateSession(newTitle) {
		let newSession = JSON.parse(sessionStorage.twitch);
		newSession.status = newTitle;
		sessionStorage.twitch = JSON.stringify(newSession);
	}

	handleActions(action) {
		switch (action.type) {
			case 'CHANGE_TITLE': {
				this.changeTitle(action.title);
			}
		}
	}
}

const changeStore = new ChangeStore;
dispatcher.register(changeStore.handleActions.bind(changeStore));

export default changeStore;