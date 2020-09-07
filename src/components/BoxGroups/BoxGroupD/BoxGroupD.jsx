import React from 'react';
import BoxFifteen from './BoxFifteen/BoxFifteen';
import BoxFourteen from './BoxFourteen/BoxFourteen';
import BoxSixteen from './BoxSixteen/BoxSixteen';
import BoxThirteen from './BoxThirteen/BoxThirteen';
import './style/BoxGroupD.css';

function BoxGroupD() {
	return (
		<div className='boxGroupContainer'>
			<BoxFifteen />
			<BoxFourteen />
			<BoxSixteen />
			<BoxThirteen />
		</div>
	);
}

export default BoxGroupD;
