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
				size={160}
				background={'#fff'}
				radius={40}
			/>

			<Frame
				animate={{ rotate: -360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={120}
				background={'#333333'}
				radius={30}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={80}
				background={'#555555'}
				radius={20}
			/>
			<Frame
				animate={{ rotate: -360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={45}
				background={'#647382'}
				radius={10}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={25}
				background={'#739439'}
				radius={5}
			/>

			<Frame
				animate={{ rotate: 360 }}
				transition={{
					duration: getRandomInt(10),
					loop: Infinity,
				}}
				size={10}
				background={'#498534'}
				radius={3}
			/>
		</div>
	);
}

export default BoxNine;
