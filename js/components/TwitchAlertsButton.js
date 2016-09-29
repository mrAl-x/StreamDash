import React from 'react';
import axios from 'axios';

export default class TwitchAlertsButton extends React.Component {
	constructor() {
		super();
		// Checks if the URL has an access token
		this.checkUrl();
	}

	checkUrl() {
		try {
			const code = window.location.search.split('code=')[1];
			if (code) {
				axios.get('php/twitchalertsToken.php?code=' + code).then((data) => {
					console.log(data);
				})
				.catch(function (data) {
					console.log(data);
				});
			}
		}
		catch(err) {
			console.error('You must be logged in to TwitchAlerts ', err);
		}
	}

	render() {
		return(
			<a href="php/twitchalertsAuth.php">Connect To TwitchAlerts</a>
		)
	};
}