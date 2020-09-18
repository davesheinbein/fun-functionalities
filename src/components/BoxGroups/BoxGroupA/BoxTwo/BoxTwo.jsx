import React, { Component } from 'react';
import { withGesture } from 'react-with-gesture';
import { Spring, animated } from 'react-spring/renderprops';
import './style/BoxTwo.css';

class BoxTwo extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0, disable: false };
	}

	increment(e) {
		e.preventDefault();
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	decrement(e) {
		e.preventDefault();
		this.setState({
			counter: this.state.counter - 1,
		});
	}

	render() {
		console.log(this.props.delta, '<<<< this.props.delta');
		const {
			delta: [xDelta],
			down,
		} = this.props;
		const to = { x: down ? xDelta : 0 };

		console.log(to, '<<< to', down, '<<< down');
		let localDisable = this.state.disable;
		if (down === false && localDisable === true) {
			// console.log('Hitting Local Disable');
			this.setState({
				disable: false,
			});
			localDisable = false;
		}
		if (!localDisable && this.props.delta[0] < [180]) {
			this.state.counter = this.state.counter + 1 / 2;
			this.state.disable = true;
		}
		if (!localDisable && this.props.delta[0] > [-180]) {
			this.state.counter = this.state.counter - 1 / 2;
			this.state.disable = true;
		}

		return (
			<div className='gestures-main'>
				<Spring
					native
					to={to}
					immediate={(n) => down && n === 'x'}>
					{({ x }) => (
						<animated.div
							className='gestures-item'
							style={{
								backgroundColor:
									xDelta < 0 ? '#81FBB8' : '#F6416C',
							}}>
							<animated.div
								className='gestures-bubble'
								style={{
									transform: x
										.interpolate({
											map: Math.abs,
											range: [50, 300],
											output: [0.5, 1],
											extrapolate: 'clamp',
										})
										.interpolate((x) => `scale(${x})`),
									justifySelf: xDelta < 0 ? 'end' : 'start',
								}}
							/>
							<animated.div
								className='gestures-fg'
								style={{
									transform: x.interpolate(
										(x) => `translate3d(${x}px,0,0)`
									),
								}}>
								Slide me!
							</animated.div>
						</animated.div>
					)}
				</Spring>
				<div className='countTextContainer'>
					<div className='countText'>
						<div className='countTextHeading'>Count:</div>
						<div className='countTextBody'>
							{this.state.counter}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withGesture()(BoxTwo);
