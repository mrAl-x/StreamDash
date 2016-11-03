// Dependecies
import React from 'react';

// Store
import FollowerListStore from '../../stores/FollowerStore';

// Actions
import * as FollowersActions from '../../actions/FollowersActions';

export default class SubscriberNumber extends React.Component {
	constructor() {
		super();
		this.state = {
			totalSubs: 0
		}
	}

	// 	let channel = JSON.parse(sessionStorage.twitch);
	// 	channel = channel.display_name;
	// 	this.user = {
	// 		clientId: sessionStorage.clientId,
	// 		channel
	// 	};

	// 	FollowersActions.getTotalFollowers(this.user);
	// }

	// componentWillMount() {
	// 	FollowerListStore.on('change', () => {
	// 		this.setState({
	// 			totalSubs: FollowerListStore.returnTotalFollowers()
	// 		});
	// 	});
	// }

	// componentDidMount() {
	// 	// Gets the number of followers every minute
	// 	setInterval(() => {
	// 		FollowersActions.getTotalFollowers(this.user);
	// 		FollowerListStore.on('change', () => {
	// 			const followers = FollowerListStore.returnTotalFollowers();
	// 			if (this.state.totalSubs != followers) {
	// 				this.setState({
	// 					totalSubs: followers
	// 				});
	// 			}
	// 		});
	// 	}, 60000 );
	// }

	render() {
		return (
			<div>
				<p className="separator__number">{this.state.totalSubs}</p>
				<p className="separator__label">Subscribers</p>
			</div>
		)
	}
}