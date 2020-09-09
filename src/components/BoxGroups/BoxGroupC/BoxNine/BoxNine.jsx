import * as React from 'react';
import { Frame } from 'framer';
import './style/BoxNine.css';

function BoxNine() {
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	return (
		<div className='framerContainer'>
			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={300}
				background={
					'radial-gradient(circle, rgba(208,239,255,1) 0%, rgba(0,240,255,1) 100%)'
				}
				radius={40}
			/>

			<Frame
				animate={{ rotate: -360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={200}
				background={
					'radial-gradient(circle, rgba(239,255,208,1) 0%, rgba(11,255,0,1) 100%)'
				}
				radius={30}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={125}
				background={
					'radial-gradient(circle, rgba(210,208,255,1) 0%, rgba(82,0,255,1) 100%)'
				}
				radius={20}
			/>
			<Frame
				animate={{ rotate: -360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={75}
				background={
					'radial-gradient(circle, rgba(255,225,208,1) 0%, rgba(255,124,0,1) 100%)'
				}
				radius={10}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={45}
				background={
					'radial-gradient(circle, rgba(255,208,244,1) 0%, rgba(255,0,79,1) 100%)'
				}
				radius={5}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={20}
				background={
					'radial-gradient(circle, rgba(255,208,214,1) 0%, rgba(0,255,236,1) 100%)'
				}
				radius={3}
			/>
		</div>
	);
}

export default BoxNine;
