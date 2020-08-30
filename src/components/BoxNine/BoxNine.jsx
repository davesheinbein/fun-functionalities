import * as React from 'react';
import { render } from 'react-dom';
import { Frame } from 'framer';
import './style/BoxNine.css';

function BoxNine() {
	return (
		<div className='framerContainer'>
			<Frame
				animate={{ rotate: 360 }}
				transition={{ duration: 1, loop: Infinity }}
				size={150}
				background={'#fff'}
				radius={30}
			/>
		</div>
	);
}

export default BoxNine;
