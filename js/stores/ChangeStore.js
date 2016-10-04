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

		$.ajax({
			url: 'https://api.twitch.tv/kraken/channels/' + twitch.channel + '?oauth_token=' + twitch.token + '&client_id=' + twitch.clientId + '&channel[status]=' + twitch.title + '&_method=put',
			type: 'GET',
			contentType: 'application/json',
			dataType: 'jsonp',
			success: function(data) {
				console.log('Changes will be updated in a few seconds!');
			}
		});
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