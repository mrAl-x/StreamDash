// Dependecies
import React from 'react';

// Stores
import LoginStore from '../stores/LoginStore';

// Components
import LoginButton from './LoginButton';
import StreamCard from './StreamCard';
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
							<div className="col-lg-12">
								<div className="avatar">
									<img src={this.state.logo} className="avatar__pic" />
								</div>
							</div>
						</div>
						<div className="cards row">
							<div className="cards__container cards__container--stream col-lg-4">
								<StreamCard status={this.state.status} game={this.state.game} followers={this.state.followers} />
							</div>
							<div className="cards__container cards__container--followers col-lg-3">
								<FollowerList />
							</div>
							<div className="rightSide col-lg-5">
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