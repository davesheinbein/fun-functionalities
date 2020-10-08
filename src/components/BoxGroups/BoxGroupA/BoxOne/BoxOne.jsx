import React, { Component } from 'react';
import {
	Spring,
	animated,
	interpolate,
} from 'react-spring/renderprops';
import './style/BoxOne.css';

const HEART =
	'm 106.2 71.4 a 72.9 72.9 90 0 1 180.9 251.1 a 72.9 72.9 90 0 1 -180.9 -251.1 q 0 0 0 0 q 0 0 0 0 z';
const SMALLHEART =
	'm 40.5 121.5 a 81 81 90 0 1 162 0 a 81 81 90 0 1 162 0 q 0 121.5 -162 243 q -162 -121.5 -162 -243 z';
const styles = {
	container: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		willChange: 'background',
	},
	shape: {
		width: 300,
		height: 300,
		willChange: 'transform',
	},
};

export default class BoxOne extends Component {
	state = { toggle: true };
	toggle = () =>
		this.setState((state) => ({ toggle: !state.toggle }));
	componentDidMount() {
		setInterval(() => this.forceUpdate(), 1000);
	}
	render() {
		const toggle = this.state.toggle;
		return (
			<Spring
				native
				from={{ fill: 'black' }}
				to={{
					fill: toggle ? '#ff91f4' : '#70C1B3',
					backgroundColor: toggle ? '#9F44D3' : '#F3FFBD',
					rotate: toggle ? '0deg' : '180deg',
					scale: toggle ? 0.75 : 1.5,
					shape: toggle ? SMALLHEART : HEART,
				}}
				toggle={this.toggle}
				onRest={() => console.log('done')}>
				{({
					toggle,
					backgroundColor,
					fill,
					rotate,
					scale,
					shape,
				}) => (
					<animated.div
						className='shapeAnimationContainer'
						style={{
							...styles.container,
							backgroundColor,
						}}>
						<animated.svg
							className='shapeSVG'
							style={{
								...styles.shape,
								fill,
								transform: interpolate(
									[rotate, scale],
									(r, s) =>
										`rotate3d(0,1,0,${r}) scale(${s})`
								),
							}}
							version='1.1'
							viewBox='0 0 400 400'>
							<g
								style={{ cursor: 'pointer' }}
								fillRule='evenodd'
								onClick={this.toggle}>
								<animated.path id='path-1' d={shape} />
							</g>
							<animated.text
								x='150'
								y='180'
								fill='#fff'
								fontSize='5rem'
								className='face'
								pointerEvents='none'>
								0 0
							</animated.text>
							<animated.text
								x='165'
								y='170'
								fill='#fff'
								fontSize='5rem'
								className='face'
								pointerEvents='none'>
								.
							</animated.text>
							<animated.text
								x='160'
								y='175'
								fill='#fff'
								fontSize='3rem'
								className='face'
								pointerEvents='none'>
								o
							</animated.text>
							<animated.text
								x='212'
								y='170'
								fill='#fff'
								fontSize='5rem'
								className='face'
								pointerEvents='none'>
								.
							</animated.text>
							<animated.text
								x='212'
								y='175'
								fill='#fff'
								fontSize='3rem'
								className='face'
								pointerEvents='none'>
								o
							</animated.text>
							<animated.text
								x='171'
								y='234'
								fill='#fff'
								fontSize='5rem'
								className='face'
								pointerEvents='none'>
								. .
							</animated.text>
							<animated.text
								x='179'
								y='250'
								fill='#fff'
								fontSize='5rem'
								className='face'
								pointerEvents='none'>
								^
							</animated.text>
							<animated.text
								x='130'
								y='300'
								fill='#fff'
								fontSize='6rem'
								className='face'
								pointerEvents='none'>
								\__/
							</animated.text>
						</animated.svg>
					</animated.div>
				)}
			</Spring>
		);
	}
}
