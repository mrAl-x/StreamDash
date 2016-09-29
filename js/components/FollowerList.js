// Dependecies
import React from 'react';

// Store
import FollowerListStore from '../stores/FollowerListStore';

// Actions
import * as FollowersActions from '../actions/FollowersActions';

export default class FollowerList extends React.Component {
	constructor() {
		super();
		var channel = JSON.parse(sessionStorage.twitch);
		channel = channel.display_name;
		const user = {
			clientId: sessionStorage.clientId,
			channel
		};
		FollowersActions.getLastFollower(user);
	}

	componentWillMount() {
		FollowerListStore.on('change', () => {
			this.setState({
				follower: FollowerListStore.returnFollower()
			});
		});
	}

	returnFollower(key) {
		let returnFollower;
		(this.state) ? returnFollower = this.state.follower : returnFollower;
		if (returnFollower) {
			console.log(returnFollower);
			return returnFollower[key];
		}
	}

	render() {
		const twitchUrl = 'https://www.twitch.tv/';
		return (
			<div>
				<p>Last follower (maybe not in this component?)</p>
				<a href={twitchUrl + this.returnFollower('name')} target='blank'>{this.returnFollower('display_name')}</a>
			</div>
		);
	}
}