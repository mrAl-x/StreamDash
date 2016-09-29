// Dependecies
import React from 'react';

// Stores
import LoginStore from '../stores/LoginStore';

// Components
import LoginButton from './LoginButton';
import Followers from './Followers';
import FollowerList from './FollowerList';
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
			return (
				<div>
					<h3>Welcome to {this.state.display_name}'s dashboard!</h3>
					<Followers followers={this.state.followers} />
					<FollowerList />
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