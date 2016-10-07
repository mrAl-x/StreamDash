// Dependecies
import React from 'react';

// Stores
import LoginStore from '../stores/LoginStore';

// Components
import LoginButton from './LoginButton';
import StreamTitle from './StreamTitle';
import StreamGame from './StreamGame';
import FollowerNumber from './FollowerNumber';
import FollowerList from './FollowerList';
import Chat from './Chat';
// import TwitchAlertsButton from './TwitchAlertsButton';

export default class Layout extends React.Component {
	constructor() {
		super();
		try {
			const channel = JSON.parse(sessionStorage.twitch);
			const clientId = sessionStorage.clientId;
			this.state = {...channel, clientId};
		}
		catch(err) {
			console.error('not logged in ', err);
		}
	}

	componentWillMount() {
		LoginStore.on('change', () => {
			const channel = JSON.parse(sessionStorage.twitch);
			const cliendId = sessionStorage.clientId;
			this.setState({...channel, clientId});
		});
	}

	render() {
		if (sessionStorage.twitch) {
					// <StreamGame title={this.state.game} />
			return (
				<div>
					<h3>Welcome to {this.state.display_name}'s dashboard!</h3>
					<StreamTitle title={this.state.status} />
					<span>Playing </span>
					<StreamGame game={this.state.game} />
					<FollowerNumber followers={this.state.followers} />
					<p>Last follower (maybe not in this component?)</p>
					<FollowerList />
					<Chat />
				</div>
			)
		}
		else {
			return (
				<div>
					<LoginButton />
				</div>
			)
		}
	}
}