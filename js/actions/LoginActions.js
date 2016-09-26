import dispatcher from '../dispatcher';

export function getChannel(channel) {
	dispatcher.dispatch({
		type: 'GET_CHANNEL',
		channel
	});
}