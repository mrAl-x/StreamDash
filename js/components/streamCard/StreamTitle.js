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

	labelClick() {
		this.setState({
			input: true
		});
	}

	handleClick(e) {
		this.setState({
			title: e.target.innerHTML,
			input: true
		});
	}

	handleNewTitle(e) {
		this.title = e.target.value;
	}

	confirmNewTitle() {
		// let tempTitle = this.title.split(' ');
		// console.log(tempTitle);
		if (this.title && this.title != '')
		ChangeActions.changeTitle(this.title);
		this.setState({
			title: this.title,
			input: false
		});
	}

	render() {
		if (this.state.input && this.state.title) {
			return (
				<div>
					<input className="streamData__input" defaultValue={this.state.title || this.props.title}
						onChange={this.handleNewTitle.bind(this)} />
					<button onClick={this.confirmNewTitle.bind(this)}>Done</button>
				</div>
			)
		}
		else {
			return <h2 className="streamData__title" onClick={this.handleClick.bind(this)} >{this.state.title || this.props.title}</h2>
		}
	}
}