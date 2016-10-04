import React from 'react';

import * as LoginActions from '../actions/LoginActions';

export default class LoginButton extends React.Component {

	constructor() {
		super();
		// Checks if the URL has an access token
		this.checkUrl();
	}

	checkUrl() {
		try {
			const url   = window.location.hash.split('access_token=')[1]
			if (url || sessionStorage.twitch)
				this.getChannel();
		}
		catch(err) {
			console.error('You must be logged in ', err);
		}
	}

	getChannel() {
		const clientId = 'lthdupwglh0epkjmqo93smokw2agfdl'
		Twitch.init({clientId: clientId}, function(error, status) {
			Twitch.api({method: 'channel'}, function(error, channel) {
				channel = JSON.stringify(channel);
				// Sends the channel JSON to the the actions where any store can get it
				LoginActions.getChannel(channel, clientId);
		   });
	   });
	}

	twitchLogin() {
		Twitch.init({clientId: 'lthdupwglh0epkjmqo93smokw2agfdl'}, function(error, status) {
			// the sdk is now loaded
			Twitch.login({
				scope: ['user_read', 'channel_read', 'channel_editor', 'chat_login']
			});
		});
	}

	render() {
		return (
			<div>
				<img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" onClick={this.twitchLogin.bind(this)} style={{cursor:'pointer'}} className="" href="#" />
			</div>
		);
	}
}