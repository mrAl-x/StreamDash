import React from 'react';

export default class Chat extends React.Component {
	constructor() {
		super();
		const channel = JSON.parse(sessionStorage.twitch).name;
		this.url = 'http://www.twitch.tv/' + channel + '/chat';
	}

	render() {
		return (
			<iframe frameborder="0" scrolling="no" id="chat_embed"
				width="350" height="400" src={this.url} >
			</iframe>
		);
	}
}