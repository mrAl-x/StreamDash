import dispatcher from '../dispatcher';

export function getLastFollower(user) {
	dispatcher.dispatch({
		type: 'GET_FOLLOWER',
		channel: user.channel,
		clientId: user.clientId
	});
}