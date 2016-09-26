import React from 'react';

import LoginButton from './LoginButton';
import LoginStore from '../stores/LoginStore';

export default class Layout extends React.Component {
	constructor() {
		super();
		try {
			const channel = JSON.parse(sessionStorage.channel);
			this.state = {...channel};
		}
		catch(err) {
			console.error('not logged in ', err);
		}
	}

	componentWillMount() {
		LoginStore.on('change', () => {
			const channel = JSON.parse(sessionStorage.channel);
			this.setState({...channel});
		});
	}

	render() {
		if (sessionStorage.channel) {
			return (
				<h3>Welcome to {this.state.display_name}'s dashboard!</h3>
			)
		}
		else {
			return (
				<div>
					<LoginButton />
				</div>
			)
		}
	}
}