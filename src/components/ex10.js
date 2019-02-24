import React from 'react';
import PropTypes from 'prop-types';

class DzieckoComponent extends React.Component {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrease = this.decrease.bind(this);
	}
	increment() {
		this.props.onIncrement()
	}

	decrease() {
		this.props.onDecrease()
	}

	render() {
		return (
			<dir>
				<output>{this.props.numValue}</output><br />
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrease}>-</button>
			</dir>
		)
	}
}


export default class RodzicComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {numValue: 0};
		this.handelManualChangeInput = this.handelManualChangeInput.bind(this);
		this.increment = this.increment.bind(this);
		this.decrease = this.decrease.bind(this);
	}
	handelManualChangeInput(event) {
		this.setState({
			numValue: Number(event.target.value)
		}, () => {console.log(typeof (this.state.numValue))})
	}

	increment() {
		this.setState({
			numValue: this.state.numValue + 1
		}, () => {console.log(typeof (this.state.numValue))})
	}

	decrease() {
		this.setState({
			numValue: this.state.numValue - 1
		}, () => {console.log(typeof (this.state.numValue))})
	}

	render() {
		return (
			<div>
				<input
					name="numValue"
					type="number"
					value={this.state.numValue}
				 	onChange={this.handelManualChangeInput} />
				<DzieckoComponent
				  numValue={this.state.numValue}
					onIncrement={this.increment}
					onDecrease={this.decrease}/>
			</div>
		)
	}
}

DzieckoComponent.propTypes = {
	numValue: PropTypes.number
}
