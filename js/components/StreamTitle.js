import React from 'react';

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
		this.setState({
			title: e.target.innerHTML,
			input: true
		});
	}

	handleNewTitle(e) {
		this.title = e.target.value;
	}

	confirmNewTitle() {
		this.setState({
			title: this.title,
			input: false
		});
	}

	render() {
		if (this.state.input && this.state.title) {
			return (
				<div>
					<input defaultValue={this.state.title || this.props.title} onChange={this.handleNewTitle.bind(this)} />
					<button onClick={this.confirmNewTitle.bind(this)}>Done</button>
				</div>
			)
		}
		else {
			return <h1 onClick={this.handleClick.bind(this)} >{this.state.title || this.props.title}</h1>
		}
	}
}