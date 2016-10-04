import dispatcher from '../dispatcher';

export function getFollowersNumber(user) {
	dispatcher.dispatch({
		type: 'GET_FOLLOWERS_NUMBER'
	});
}

export function getLastFollowers(user) {
	dispatcher.dispatch({
		type: 'GET_FOLLOWERS',
		channel: user.channel,
		clientId: user.clientId
	});
}