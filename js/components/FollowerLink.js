// Dependecies
import React from 'react';

export default class FollowerLink extends React.Component {
	render() {
		return <li><a href={this.props.link} target="_blank">{this.props.title}</a></li>
	}
}