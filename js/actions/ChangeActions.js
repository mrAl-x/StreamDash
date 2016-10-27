import dispatcher from '../dispatcher';

export function changeTitle(title) {
	dispatcher.dispatch({
		type: 'CHANGE_TITLE',
		title
	});
}