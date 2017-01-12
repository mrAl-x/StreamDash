import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LoginStore extends EventEmitter {
	getChannel(channel, clientId) {
		sessionStorage.twitch = channel;
		sessionStorage.clientId = clientId;
		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'GET_CHANNEL': {
				this.getChannel(action.channel, action.clientId);
			}
		}
	}
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));

export default loginStore;