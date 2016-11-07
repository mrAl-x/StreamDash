// Dependecies
import React from 'react';

export default class FollowerLink extends React.Component {
	render() {
		return <li className="list__follower"><a className="follower__link" href={this.props.link} target="_blank">{this.props.title}</a></li>
	}
}