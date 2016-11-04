import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class StreamGameStore extends EventEmitter {
	constructor() {
		super();
		this.games = [];
	}

	componentWillMount() {
		let token = JSON.parse(sessionStorage.twitch_oauth_session).token;
		let clientId = sessionStorage.clientId;
		let channel = JSON.parse(sessionStorage.twitch).display_name;

		this.twitch = {
			token,
			channel,
			clientId
		};
	}

	searchGame(title) {
		const url = `https://api.twitch.tv/kraken/search/games?q=${title}&type=suggest&client_id=${sessionStorage.clientId}`;
		axios.get(url).then((data) => {
			this.games = data.data.games;
			this.emit('change');
		})
		.catch(() => {
			console.error(data)
		});
	}

	pickGame(title) {
		const url = `https://api.twitch.tv/kraken/channels/`
		+ `${this.twitch.channel}?oauth_token=${this.twitch.token}`
		+ `&client_id=${this.twitch.clientId}&channel[game]=${title}&_method=put`;
		axios.get(url).then((data) => {
			let session = JSON.parse(sessionStorage.twitch);
			session.game = title;
			sessionStorage.twitch = JSON.stringify(session);
			console.log('Game name changed');
		})
		.catch(() => {
			console.error(data);
		});
	}

	returnGames() {
		return this.games;
	}

	handleActions(action) {
		switch (action.type) {
			case 'SEARCH_GAME': {
				this.searchGame(action.title);
				break;
			}
			case 'PICK_GAME': {
				this.pickGame(action.title);
				break;
			}
		}
	}
}

const streamGameStore = new StreamGameStore;
dispatcher.register(streamGameStore.handleActions.bind(streamGameStore));

export default streamGameStore;