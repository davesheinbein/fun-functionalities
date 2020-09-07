import React from 'react';
import BoxEight from './BoxEight/BoxEight';
import BoxFive from './BoxFive/BoxFive';
import BoxFour from './BoxFour/BoxFour';
import BoxSix from './BoxSix/BoxSix';
import './style/BoxGroupB.css';

function BoxGroupB() {
	return (
		<div className='boxGroupContainer'>
			<BoxEight />
			<BoxFive />
			<BoxFour />
			<BoxSix />
		</div>
	);
}

export default BoxGroupB;
