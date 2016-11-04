import React from 'react';

import StreamGameStore from '../../stores/StreamGameStore';
import * as StreamGameActions from '../../actions/StreamGameActions';

export default class StreamGameBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: props.game,
			box: null
		};
	}

	componentWillMount() {
		StreamGameActions.searchGame(this.state.game);
		StreamGameStore.on('change', () => {
			let gameBox = StreamGameStore.returnGames();
			gameBox = gameBox[0].box.large;
			this.setState({
				box: gameBox
			});
		});
	}

	render() {
		return <img src={this.state.box} className="gameBox__image" alt="" />
	}
}
