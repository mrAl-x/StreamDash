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
			return (
				<div>
					<header className="header container-fluid">
						<div className="container">
							<div className="row">
								<h1 className="header__logo">StreamDash</h1>
								<span className="header__user">{this.state.display_name}</span>
							</div>
						</div>
					</header>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="avatar">
									<img src={this.state.logo} className="avatar__pic" />
								</div>
							</div>
							<div className="col-md-7">
								<StreamTitle title={this.state.status} />
								<span>Playing </span>
								<StreamGame game={this.state.game} />
								<FollowerNumber followers={this.state.followers} />
								<p>Last follower (maybe not in this component?)</p>
								<FollowerList />
							</div>
							<div className="rightSide col-md-5">
								<Chat />
							</div>
						</div>
					</div>
				</div>
			);
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