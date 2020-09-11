// Update the import to include the useState hook
import React, { useState, useEffect } from 'react';
// Import the Battery component used for visualization
import Battery from '../Battery/Battery';
import { register, unregister } from '../../utils/battery';

function BatteryHookContainer() {
	// useState always returns an array of two elements
	// const arr = useState(.55);
	// First element is the value of the state
	// const level = arr[0];
	// Second element is a setter function for updating the state
	// const setLevel = arr[1];

	// Destructured version of above
	// const [level, setLevel] = useState(.55);

	const [batteryData, setBatteryData] = useState({
		level: 0.55,
		charging: true,
	});

	useEffect(() => {
		register(updateBattery);
		console.log('useEffect was called');
		return () => {
			unregister(updateBattery);
		};
	}, []);

	function updateBattery(batteryData) {
		setBatteryData(batteryData);
	}

	return (
		<>
			<Battery
				level={batteryData.level}
				charging={batteryData.charging}
			/>
			{/* <button onClick={() => setBatteryData({
                level: batteryData.level + .01,
                charging: false
            })}>
                Update Level
            </button> */}
		</>
	);
}

export default BatteryHookContainer;
