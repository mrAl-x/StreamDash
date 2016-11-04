import React from 'react';

import StreamTitle from './streamCard/StreamTitle';
import StreamGame from './streamCard/StreamGame';
import StreamGameBox from './streamCard/StreamGameBox';
import FollowerNumber from './streamCard/FollowerNumber';
import SubscriberNumber from './streamCard/SubscriberNumber';

export default class StreamCard extends React.Component {

	render() {
		return (
			<div>
				<div className="container__gameBox">
					<StreamGameBox game={this.props.game} />
				</div>
				<div className="container__streamData">
					<p className="streamData__label">Title</p>
					<StreamTitle title={this.props.status} />
					<p className="streamData__label">Playing </p>
					<StreamGame game={this.props.game} />
					<div className="streamData__separator streamData__separator--followers">
						<FollowerNumber followers={this.props.followers} />
					</div>
					<div className="streamData__separator streamData__separator--subscribers">
						<SubscriberNumber subs={this.props.subs} />
					</div>
				</div>
			</div>
		);
	}
}
