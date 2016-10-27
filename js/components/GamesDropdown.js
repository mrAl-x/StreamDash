// Dependecies
import React from 'react';

import StreamGameStore from '../stores/StreamGameStore';

export default class GamesDropdown extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		StreamGameStore.on('change', () => {
			let i = 0;
			let games = [
				...StreamGameStore.returnGames()
			];
			games = games.slice(0, 5);

			this.setState({
				...games
			});
		});
	}

	returnGames() {
		let games = [];
		const stateLength = Object.keys(this.state).length;

		for (let i = 0; i < stateLength; i++) {
			games.push(
				<li key={i}>
					<img src={this.state[i].box.small} alt="" />
					<span>{this.state[i].name}</span>
				</li>
			);
		}

		return games;
	}

	render() {
		if (this.state) {
			return (
				<ul className="gameList">
					{this.returnGames()}
				</ul>
			);
		}
		else {
			return <li></li>;
		}
	}
}