import React from 'react';

import StreamGameStore from '../../stores/StreamGameStore';
import GamesDropdown from './GamesDropdown';
import * as StreamGameActions from '../../actions/StreamGameActions';

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

	componentDidMount() {
		StreamGameStore.on('gameChange', () => {
			let session = JSON.parse(sessionStorage.twitch);
			this.setState({
				game: session.game,
				input: false
			});
		});
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
			this.typewatch(e.target.value, 500);
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

	blur(e) {
		const dropdown = document.getElementsByClassName('streamData__gameList')[0];
		if(!dropdown || e.target.value == '') {
			this.setState({
				input: false
			});
		}
	}

	render() {
		if (this.state.input && this.state.game) {
			return (
				<div>
					<input className="streamData__input streamData__input--game" defaultValue={this.state.game || this.props.game}
						onKeyUp={this.searchGame.bind(this)} onBlur={this.blur.bind(this)} autoFocus="true" />
					<GamesDropdown />
				</div>
			);
		}
		else {
			return <h3 className="streamData__game" onClick={this.handleClick.bind(this)} >{this.state.game || this.props.game}</h3>
		}
	}
}