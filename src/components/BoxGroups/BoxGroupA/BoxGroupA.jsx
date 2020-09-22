import React from 'react';
import BoxOne from './BoxOne/BoxOne';
import BoxTwo from './BoxTwo/BoxTwo';
import BoxThree from './BoxThree/BoxThree';
import BoxSeven from './BoxSeven/BoxSeven';
import './style/BoxGroupA.css';

function BoxGroupA(props) {
	return (
		<div className='boxGroupContainer'>
			<BoxOne />
			<BoxTwo />
			<BoxThree />
			<BoxSeven />
		</div>
	);
}

export default BoxGroupA;
