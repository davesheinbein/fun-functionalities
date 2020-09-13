import React from 'react';
import './style/Battery.css';

function Battery(props) {
	let height = `${props.level * 100}%`;
	return (
		<div className='batteryContain'>
			<div className='battery'>
				<div className='tip' />
				<div className='level' style={{ height }}>
					{props.charging && '⚡'}
				</div>
			</div>
			<div className='batteryText'>
				{(props.level * 100).toFixed(0) + '%'}
			</div>
		</div>
	);
}

export default Battery;
