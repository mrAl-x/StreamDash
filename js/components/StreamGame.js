import React from 'react';

import ChangeStore from '../stores/ChangeStore';
import * as ChangeActions from '../actions/ChangeActions';

export default class StreamGame extends React.Component {

	constructor() {
		super();
		this.game = null;
		this.state = {
			game: this.game,
			input: false
		}
	}

	handleClick(e) {
		this.setState({
			game: e.target.innerHTML,
			input: true
		});
	}

	handleNewGame(e) {
		this.game = e.target.value;
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
					<input defaultValue={this.state.game || this.props.game} onChange={this.handleNewGame.bind(this)} />
					<button onClick={this.confirmNewGame.bind(this)}>Done</button>
				</div>
			)
		}
		else {
			return <span onClick={this.handleClick.bind(this)} >{this.state.game || this.props.game}</span>
		}
	}
}