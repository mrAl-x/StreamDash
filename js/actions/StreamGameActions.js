import dispatcher from '../dispatcher';

export function changeGame(title) {
	dispatcher.dispatch({
		type: 'CHANGE_GAME',
		title
	});
}