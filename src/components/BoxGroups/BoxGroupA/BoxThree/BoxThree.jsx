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
						strokeWidth='0.3'
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
									d='m 8.2 15.6 l 8.1 -9.45 l 4.05 -1.35 l -1.35 4.05 l -9.45 8.1 c 1.35 1.35 1.35 2.7 2.7 1.35 c 0 1.35 1.35 2.7 0 2.7 a 1.917 1.917 90 0 1 -1.35 1.35 a 6.75 6.75 90 0 0 -2.7 -4.05 q -0.675 -0.135 -0.675 0.675 t -2.025 1.755 t -1.08 -1.08 t 1.755 -2.025 t 0.675 -0.675 a 6.75 6.75 90 0 0 -4.05 -2.7 a 1.917 1.917 90 0 1 1.35 -1.35 c 0 -1.35 1.35 0 2.7 0 c -1.35 1.35 0 1.35 1.35 2.7 m 8.1 -9.45 l 0 2.7 l 2.7 0 l -2.43 -0.27 l -0.2 -2.43 m -0.15 2.75 l -7 7'
									className='starPath'></animated.path>
							)}
						</Spring>
					</g>
				</svg>
				<div className='starText'>
					Click the <br /> Sword
				</div>
			</div>
		);
	}
}

export default BoxThree;
