// Dependecies
import React from 'react';

// Store
import FollowerListStore from '../../stores/FollowerStore';

// Components
import FollowerLink from './FollowerLink';

// Actions
import * as FollowersActions from '../../actions/FollowersActions';

export default class FollowerList extends React.Component {
	constructor() {
		super();
		var channel = JSON.parse(sessionStorage.twitch);
		channel = channel.display_name;
		const user = {
			clientId: sessionStorage.clientId,
			channel
		};
		FollowersActions.getLastFollowers(user);
	}

	componentWillMount() {
		FollowerListStore.on('change', () => {
			this.setState({
				...FollowerListStore.returnFollower()
			});
		});
	}

	returnFollowers() {
		const totalFollowers = 20;
		const twitchUrl = 'https://www.twitch.tv/';
		let followers = [];
		for (let i = 0; i < totalFollowers; i++ ) {
			followers.push(
				<FollowerLink key={this.state[i].user.name} title={this.state[i].user.display_name}
					link={twitchUrl + this.state[i].user.name}/>
			);
		}

		return followers;
	}

	render() {
		if (this.state) {
			return (
				<ul className="followers__list">
					{this.returnFollowers()}
				</ul>
			)
		}
		else {
			return (<a></a>);
		}
	}
}