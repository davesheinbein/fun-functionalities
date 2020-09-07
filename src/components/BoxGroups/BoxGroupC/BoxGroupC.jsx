import React from 'react';
import BoxEleven from './BoxEleven/BoxEleven';
import BoxNine from './BoxNine/BoxNine';
import BoxTen from './BoxTen/BoxTen';
import BoxTwelve from './BoxTwelve/BoxTwelve';
import './style/BoxGroupC.css';

function BoxGroupC() {
	return (
		<div className='boxGroupContainer'>
			<BoxEleven />
			<BoxNine />
			<BoxTen />
			<BoxTwelve />
		</div>
	);
}

export default BoxGroupC;
