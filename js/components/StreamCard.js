import React from 'react';

import StreamTitle from './streamCard/StreamTitle';
import StreamGame from './streamCard/StreamGame';
import FollowerNumber from './streamCard/FollowerNumber';
import SubscriberNumber from './streamCard/SubscriberNumber';

export default class StreamCard extends React.Component {

	render() {
		return (
			<div>
				<p className="container--stream__label">Title</p>
				<StreamTitle title={this.props.status} />
				<p className="container--stream__label">Playing </p>
				<StreamGame game={this.props.game} />
				<div className="container--stream__separator container--stream__separator--followers">
					<FollowerNumber followers={this.props.followers} />
				</div>
				<div className="container--stream__separator container--stream__separator--subscribers">
					<SubscriberNumber subs={this.props.subs} />
				</div>
			</div>
		);
	}
}
