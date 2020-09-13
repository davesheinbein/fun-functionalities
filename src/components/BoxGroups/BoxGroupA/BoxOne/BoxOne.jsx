import React, { Component } from 'react';
import {
	Spring,
	animated,
	interpolate,
} from 'react-spring/renderprops';
import './style/BoxOne.css';

const TRIANGLE =
	'M20,380 L380,380 L380,380 L200,20 L20,380 Z';
const RECTANGLE =
	'M20,20 L20,380 L380,380 L380,20 L20,20 Z';
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
					fill: toggle ? '#247BA0' : '#70C1B3',
					backgroundColor: toggle ? '#9F44D3' : '#F3FFBD',
					rotate: toggle ? '0deg' : '180deg',
					scale: toggle ? 0.5 : 1,
					shape: toggle ? RECTANGLE : TRIANGLE,
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
								y='150'
								fill='#03fc8c'
								fontSize='5rem'
								pointerEvents='none'>
								0 0
							</animated.text>
							<animated.text
								x='165'
								y='145'
								fill='#03fc8c'
								fontSize='5rem'
								pointerEvents='none'>
								.
							</animated.text>
							<animated.text
								x='160'
								y='150'
								fill='#03fc8c'
								fontSize='3rem'
								pointerEvents='none'>
								o
							</animated.text>
							<animated.text
								x='212'
								y='145'
								fill='#03fc8c'
								fontSize='5rem'
								pointerEvents='none'>
								.
							</animated.text>
							<animated.text
								x='212'
								y='150'
								fill='#03fc8c'
								fontSize='3rem'
								pointerEvents='none'>
								o
							</animated.text>
							<animated.text
								x='171'
								y='234'
								fill='#03fc8c'
								fontSize='5rem'
								pointerEvents='none'>
								. .
							</animated.text>
							<animated.text
								x='179'
								y='250'
								fill='#03fc8c'
								fontSize='5rem'
								pointerEvents='none'>
								^
							</animated.text>
							<animated.text
								x='130'
								y='325'
								fill='#03fc8c'
								fontSize='6rem'
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
