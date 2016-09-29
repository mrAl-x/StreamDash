// Dependecies
import React from 'react';

export default class Followers extends React.Component {
	// Need to get props from <Followers /> on Layout.js
	// and pass them to <FollowerList />
	render() {
		return (
			<div>
				<p>Followers</p>
				<p>{this.props.followers}</p>
			</div>
		)
	}
}