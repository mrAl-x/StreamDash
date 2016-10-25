import dispatcher from '../dispatcher';

export function getTotalFollowers(user) {
	dispatcher.dispatch({
		type: 'GET_FOLLOWERS_NUMBER',
		channel: user.channel,
		clientId: user.clientId
	});
}

export function getLastFollowers(user) {
	dispatcher.dispatch({
		type: 'GET_FOLLOWERS',
		channel: user.channel,
		clientId: user.clientId
	});
}