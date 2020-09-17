import React, { Component } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { GradientPinkRed as Gradient } from '@vx/gradient';
import * as easings from 'd3-ease';
import './style/BoxThree.css';

console.log(easings);
class BoxThree extends Component {
	state = { offset: 0 };
	path = React.createRef();
	componentDidMount() {
		this.setState({
			offset: this.path.current.getTotalLength(),
		});
	}
	render() {
		const { offset } = this.state;
		return (
			<div
				id='starContainer'
				onClick={() => this.forceUpdate()}>
				<svg
					width='180'
					viewBox='0 0 23 23'
					className='pathSVG'>
					<Gradient id='gradient-dashoffset' />
					<g
						fill='#373737'
						stroke='url(#gradient-dashoffset)'
						strokeWidth='0.9'
						strokeLinecap='round'>
						<Spring
							native
							reset
							from={{
								dash: offset,
							}}
							to={{
								dash: 0,
							}}
							config={{
								delay: 1000,
								duration: 3000,
								easing: easings.easeCubic,
							}}>
							{(props) => (
								<animated.path
									ref={this.path}
									strokeDasharray={offset}
									strokeDashoffset={props.dash}
									d='M 11.52 16.5792 l 5.9328 3.5808 l -1.5744 -6.7488 l 5.2416 -4.5408 l -6.9024 -0.5856 l -2.6976 -6.3648 l -2.6976 6.3648 l -6.9024 0.5856 l 5.2416 4.5408 l -1.5744 6.7488 z'
									className='starPath'></animated.path>
							)}
						</Spring>
					</g>
				</svg>
				<div className='starText'>Hello</div>
			</div>
		);
	}
}

export default BoxThree;
