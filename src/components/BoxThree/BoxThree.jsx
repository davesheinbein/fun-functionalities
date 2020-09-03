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
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onClick={() => this.forceUpdate()}>
				<svg width='180' viewBox='0 0 23 23' id='pathSVG'>
					<Gradient id='GradientPinkRed.fromOffset 0% GradientPinkRed.toOffset 10%' />
					<g
						fill='#373737'
						stroke='url(#GradientPinkRed.fromOffset 0% GradientPinkRed.toOffset 10%)'
						strokeWidth='0.75'>
						<Spring
							native
							reset
							from={{ dash: offset }}
							to={{ dash: 0 }}
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
									d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
									id='starPath'></animated.path>
							)}
						</Spring>
					</g>
				</svg>
			</div>
		);
	}
}

export default BoxThree;
