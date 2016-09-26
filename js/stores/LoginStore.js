import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LoginStore extends EventEmitter {
	constructor() {
		super();
	}

	handleChannel(channel) {
		sessionStorage.channel = channel;
		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'GET_CHANNEL': {
				this.handleChannel(action.channel);
			}
		}
	}
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));

export default loginStore;