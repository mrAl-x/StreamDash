import React from 'react';

import StreamTitle from './streamCard/StreamTitle';
import StreamGame from './streamCard/StreamGame';
import StreamGameBox from './streamCard/StreamGameBox';
import FollowerNumber from './streamCard/FollowerNumber';
import SubscriberNumber from './streamCard/SubscriberNumber';

const StreamCard = (props) => {
	return (
		<div>
			<div className="container__gameBox">
				<StreamGameBox game={props.game} />
			</div>
			<div className="container__streamData">
				<p className="streamData__label">Title</p>
				<StreamTitle title={props.status} />
				<p className="streamData__label">Playing</p>
				<StreamGame game={props.game} />
				<div className="streamData__separator streamData__separator--followers">
					<FollowerNumber followers={props.followers} />
				</div>
				<div className="streamData__separator streamData__separator--subscribers">
					<SubscriberNumber subs={props.subs} />
				</div>
			</div>
		</div>
	);
}

export default StreamCard;
