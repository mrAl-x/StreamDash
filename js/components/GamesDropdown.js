// Dependecies
import React from 'react';

import StreamGameStore from '../stores/StreamGameStore';

import * as StreamGameActions from '../actions/StreamGameActions';

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
			const name = this.state[i].name;
			const logo = this.state[i].box.small;
			games.push(
				<li key={i} onClick={this.pickGame.bind(this, name)}>
					<img src={logo} alt="" />
					<span>{name}</span>
				</li>
			);
		}

		return games;
	}

	pickGame(name) {
		StreamGameActions.pickGame(name);
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