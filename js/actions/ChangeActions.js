import dispatcher from '../dispatcher';

export function changeTitle(title) {
	dispatcher.dispatch({
		type: 'CHANGE_TITLE',
		title
	});
}

// export function getLastFollowers(user) {
// 	dispatcher.dispatch({
// 		type: 'GET_FOLLOWERS',
// 		channel: user.channel,
// 		clientId: user.clientId
// 	});
// }