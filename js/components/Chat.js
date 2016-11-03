import React from 'react';

export default class Chat extends React.Component {
	constructor() {
		super();
		const channel = JSON.parse(sessionStorage.twitch).name;
		this.url = 'http://www.twitch.tv/' + channel + '/chat';
	}

	render() {
		return (
			<iframe className="chat" frameBorder="0" scrolling="yes" id="chat_embed"
				width="400" height="550" src={this.url} >
			</iframe>
		);
	}
}