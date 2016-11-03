// Dependecies
import React from 'react';

// Store
import FollowerListStore from '../../stores/FollowerStore';

// Actions
import * as FollowersActions from '../../actions/FollowersActions';

export default class FollowerNumber extends React.Component {
	constructor() {
		super();
		this.state = {
			totalFollowers: 0
		}

		let channel = JSON.parse(sessionStorage.twitch);
		channel = channel.display_name;
		this.user = {
			clientId: sessionStorage.clientId,
			channel
		};

		FollowersActions.getTotalFollowers(this.user);
	}

	componentWillMount() {
		FollowerListStore.on('change', () => {
			this.setState({
				totalFollowers: FollowerListStore.returnTotalFollowers()
			});
		});
	}

	componentDidMount() {
		// Gets the number of followers every minute
		setInterval(() => {
			FollowersActions.getTotalFollowers(this.user);
			FollowerListStore.on('change', () => {
				const followers = FollowerListStore.returnTotalFollowers();
				if (this.state.totalFollowers != followers) {
					this.setState({
						totalFollowers: followers
					});
				}
			});
		}, 60000 );
	}

	render() {
		return (
			<div>
				<p className="separator__number">{this.state.totalFollowers}</p>
				<p className="separator__label">Followers</p>
			</div>
		)
	}
}