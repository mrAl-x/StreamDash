import React from 'react';

import StreamGameStore from '../stores/StreamGameStore';
import GamesDropdown from '../components/GamesDropdown';
import * as StreamGameActions from '../actions/StreamGameActions';

export default class StreamGame extends React.Component {

	constructor() {
		super();
		this.game = null;
		this.state = {
			game: this.game,
			input: false
		};
		this.timeout;
	}

	handleClick(e) {
		this.setState({
			game: e.target.innerHTML,
			input: true
		});
	}

	searchGame(e) {
		this.game = e.target.value;
		if (e.target.value.length >= 2) {
			// Creates a delay after the user stops typing before triggering the action
			this.typewatch(e.target.value, 1000);
		}
	}

	typewatch(title, timer) {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}

		this.timeout = setTimeout(() => {
			StreamGameActions.searchGame(title);
		}, timer);
	}

	confirmNewGame() {
		this.setState({
			game: this.game,
			input: false
		});
	}

	render() {
		if (this.state.input && this.state.game) {
			return (
				<div>
					<input defaultValue={this.state.game || this.props.game} onKeyUp={this.searchGame.bind(this)}
						/>
					<GamesDropdown />
				</div>
			)
		}
		else {
			return <span onClick={this.handleClick.bind(this)} >{this.state.game || this.props.game}</span>
		}
	}
}