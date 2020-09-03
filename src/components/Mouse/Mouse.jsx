import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import './style/Mouse.css';

const leavingSpringConfig = { stiffness: 60, damping: 15 };

export class Mouse extends Component {
	constructor(props) {
		super(props);
		this.state = { mouse: [], now: 't' + 0 };
	}

	handleMouseMove = ({ pageX, pageY }) => {
		// Make sure the state is queued and not batched.
		this.setState(() => {
			return {
				mouse: [pageX - 25, pageY - 25],
				now: 't' + Date.now(),
			};
		});
	};

	handleTouchMove = (e) => {
		e.preventDefault();
		this.handleMouseMove(e.touches[0]);
	};

	willLeave = (styleCell) => {
		return {
			...styleCell.style,
			opacity: spring(0, leavingSpringConfig),
			scale: spring(2, leavingSpringConfig),
		};
	};

	render() {
		const {
			mouse: [mouseX, mouseY],
			now,
		} = this.state;
		const styles =
			mouseX == null
				? []
				: [
						{
							key: now,
							style: {
								opacity: spring(1),
								scale: spring(0),
								x: spring(mouseX),
								y: spring(mouseY),
							},
						},
				  ];
		return (
			<div className='mouseContainer'>
				<TransitionMotion
					willLeave={this.willLeave}
					styles={styles}>
					{(circles) => (
						<div
							onMouseMove={this.handleMouseMove}
							onTouchMove={this.handleTouchMove}
							className='mouse'>
							{circles.map(
								({
									key,
									style: { opacity, scale, x, y },
								}) => (
									<div
										key={key}
										className='mouse-ball'
										style={{
											opacity: opacity,
											scale: scale,
											transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
											WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
										}}
									/>
								)
							)}
						</div>
					)}
				</TransitionMotion>
			</div>
		);
	}
}

export default Mouse;
