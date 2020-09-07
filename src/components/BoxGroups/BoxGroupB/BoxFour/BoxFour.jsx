import React, { Component } from 'react';
import {
	Spring,
	animated,
	config,
} from 'react-spring/renderprops';
import './style/BoxFour.css';

const COLORS = [
	'var(--colorOne)',
	'var(--colorTwo)',
	'var(--colorThree)',
	'var(--colorFour)',
	'var(--colorFive)',
	'var(--colorSix)',
	'var(--colorSeven)',
	'var(--colorEight)',
];

class BoxFour extends Component {
	state = { y: 0 };
	el = React.createRef();
	spring = React.createRef();
	setY = () =>
		this.setState({
			y: Math.round(Math.random() * 750) + 50,
		});
	// User interaction should stop animation in order to prevent scroll-hijacking
	// Doing this on onWheel isn't enough, but just to illustrate ...
	stop = () => this.spring.current.stop();
	render() {
		const y = this.el.current
			? this.el.current.scrollTop
			: 0;
		return (
			<div className='scrollerContainer'>
				<div className='scrolltop-main'>
					<Spring
						native
						reset
						from={{ y }}
						to={{ y: this.state.y }}
						ref={this.spring}
						config={config.slow}>
						{(props) => (
							<animated.div
								className='scrolltop-c'
								ref={this.el}
								onWheel={this.stop}
								scrollTop={props.y}>
								{COLORS.map((c) => (
									<div
										className='colors'
										key={c}
										style={{ height: 40000, background: c }}
									/>
								))}
							</animated.div>
						)}
					</Spring>
				</div>
				<div className='scrolltop-b' onClick={this.setY} />
			</div>
		);
	}
}

export default BoxFour;
