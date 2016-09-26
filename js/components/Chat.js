import React from 'react';

export default class Chat extends React.Component {
	render() {
		// console.log(this.props);
		const url = 'http://www.twitch.tv/' + this.props.channel + '/chat';
		console.log(url);
		return (
			<div className="foo">
				<h4>I AM {this.props.channel}'s chat component!</h4>
				<iframe frameborder="0" scrolling="no" 
					id="chat_embed" src={url} 
					height="500" width="300">
				</iframe>
			</div>
		);
	}
}