import React from 'react';
import './style/Battery.css';

function Battery(props) {
	let height = `${props.level * 100}%`;
	// console.log(props.level, '<<<<<<<<Props.level');
	// console.log(height, '<<<<<<<<Height');

	if (`${props.level * 100}%` < 25) {
		return (
			<div className='batteryContain'>
				<div className='battery'>
					<div className='tip' />
					<div
						className='level'
						style={{
							height,
							backgroundColor: 'rgba(247, 66, 57, .75)',
						}}>
						{props.charging && '⚡'}
					</div>
				</div>
				<div className='batteryText'>
					{(props.level * 100).toFixed(0) + '%'}
				</div>
			</div>
		);
	} else if (`${props.level * 100}%` < 50) {
		return (
			<div className='batteryContain'>
				<div className='battery'>
					<div className='tip' />
					<div
						className='level'
						style={{
							height,
							backgroundColor: 'rgba(255, 247, 18, .75)',
						}}>
						{props.charging && '⚡'}
					</div>
				</div>
				<div className='batteryText'>
					{(props.level * 100).toFixed(0) + '%'}
				</div>
			</div>
		);
	} else {
		return (
			<div className='batteryContain'>
				<div className='battery'>
					<div className='tip' />
					<div
						className='level'
						style={{
							height,
							backgroundColor: 'rgba(60, 232, 26, .75)',
						}}>
						{props.charging && '⚡'}
					</div>
				</div>
				<div className='batteryText'>
					{(props.level * 100).toFixed(0) + '%'}
				</div>
			</div>
		);
	}
}

export default Battery;
