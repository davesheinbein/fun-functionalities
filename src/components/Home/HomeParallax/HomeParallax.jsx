import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style/HomeParallax.css'; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [
	x - window.innerWidth / 2,
	y - window.innerHeight / 2,
];

// blob
const trans1 = (x, y) =>
	`translate3d(${x / 3 - 200}px,${y / 8}px,0)`;
// blob
const trans2 = (x, y) =>
	`translate3d(${x / 2 + 35}px,${y / 2 - 230}px,0)`;
// computer, desk
const trans3 = (x, y) =>
	`translate3d(${x / 2 + 200}px,${y / 2 - 100}px,0)`;
// guy
const trans4 = (x, y) =>
	`translate3d(${x / 3 + 400}px,${y / 2 - 50}px,0)`;
// girl
const trans5 = (x, y) =>
	`translate3d(${x / 3.5 + 50}px,${y / 2 - 50}px,0)`;
// tree
const trans6 = (x, y) =>
	`translate3d(${x / 2 + 400}px,${y / 3 - 100}px,0)`;
// tree
const trans7 = (x, y) =>
	`translate3d(${x / 2 + 200}px,${y / 3 - 250}px,0)`;
// text
const trans8 = (x, y) =>
	`translate3d(${x / 7 + 150}px,${y / 7 + 150}px,0)`;

function HomeParallax() {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));
	return (
		<div
			class='container'
			onMouseMove={({ clientX: x, clientY: y }) =>
				set({ xy: calc(x, y) })
			}>
			<animated.div
				class='card1'
				style={{ transform: props.xy.interpolate(trans1) }}
			/>
			<animated.div
				class='card2'
				style={{ transform: props.xy.interpolate(trans2) }}
			/>
			<animated.div
				class='card3'
				style={{ transform: props.xy.interpolate(trans3) }}
			/>
			<animated.div
				class='card4'
				style={{ transform: props.xy.interpolate(trans4) }}
			/>
			<animated.div
				class='card5'
				style={{ transform: props.xy.interpolate(trans5) }}
			/>

			<animated.div
				class='card6'
				style={{ transform: props.xy.interpolate(trans6) }}
			/>
			<animated.div
				class='card7'
				style={{ transform: props.xy.interpolate(trans7) }}
			/>
			<animated.div
				class='card8'
				style={{
					transform: props.xy.interpolate(trans8),
				}}>
				Exploring Fun Functionalities
			</animated.div>
		</div>
	);
}

export default HomeParallax;
