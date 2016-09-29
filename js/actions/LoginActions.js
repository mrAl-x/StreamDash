import dispatcher from '../dispatcher';

export function getChannel(channel, clientId) {
	dispatcher.dispatch({
		type: 'GET_CHANNEL',
		channel,
		clientId
	});
}