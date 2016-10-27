import dispatcher from '../dispatcher';

export function searchGame(title) {
	dispatcher.dispatch({
		type: 'SEARCH_GAME',
		title
	});
}

export function pickGame(title) {
	dispatcher.dispatch({
		type: 'PICK_GAME',
		title
	});
}