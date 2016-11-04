import React from 'react';

import ChangeStore from '../../stores/ChangeStore';
import * as ChangeActions from '../../actions/ChangeActions';

export default class StreamTitle extends React.Component {

	constructor() {
		super();
		this.title = null;
		this.state = {
			title: this.title,
			input: false
		}
	}

	handleClick(e) {
		const title = e.target.innerHTML;
		this.setState({
			title: title,
			input: true
		});
	}

	confirmNewTitle(e) {
		this.title = e.target.value;
		this.clearSpaces();

		if (this.title && this.title != '') {
			ChangeActions.changeTitle(this.title);
			this.setState({
				title: this.title,
				input: false
			});
		}
	}

	clearSpaces() {
		let title = this.title;
		try {
			while (title[0] == ' ') {
				title = title.replace(/\s/, '');
			}
			this.title = title;
		}
		catch (err) {}
	}

	render() {
		if (this.state.input && this.state.title) {
			return (
				<div>
					<input className="streamData__input" defaultValue={this.state.title || this.props.title}
						onBlur={this.confirmNewTitle.bind(this)} autoFocus="true" />
				</div>
			)
		}
		else {
			return <h2 className="streamData__title" onClick={this.handleClick.bind(this)} >{this.state.title || this.props.title}</h2>
		}
	}
}