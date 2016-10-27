import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import axios from 'axios';

class StreamGameStore extends EventEmitter {
	constructor() {
		super();
		this.games = [];
	}

	changeGame(title) {
		const url = `https://api.twitch.tv/kraken/search/games?q=${title}&type=suggest&client_id=${sessionStorage.clientId}`;
		axios.get(url).then((data) => {
			this.games = data.data.games;
			this.emit('change');
		})
		.catch(() => {
			console.error(data)
		});
	}

	returnGames() {
		return this.games;
	}

	handleActions(action) {
		switch (action.type) {
			case 'CHANGE_GAME': {
				this.changeGame(action.title);
				break;
			}
		}
	}
}

const streamGameStore = new StreamGameStore;
dispatcher.register(streamGameStore.handleActions.bind(streamGameStore));

export default streamGameStore;