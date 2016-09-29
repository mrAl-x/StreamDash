// Dependecies
import React from 'react';

export default class FollowerNumber extends React.Component {
	render() {
		return (
			<div>
				<p>Followers</p>
				<p>{this.props.followers}</p>
			</div>
		)
	}
}