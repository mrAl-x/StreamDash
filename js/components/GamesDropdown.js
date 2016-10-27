// Dependecies
import React from 'react';

import StreamGameStore from '../stores/StreamGameStore';

export default class GamesDropdown extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}

	fetchGame() {
		StreamGameStore.on('change', () => {
			this.setState({
				...StreamGameStore.returnGames()
			});
			console.log(this.state);
		});
	}

	render() {
		return (
			<li>
				<span>{this.fetchGame()}</span>
			</li>
		);
	}
}