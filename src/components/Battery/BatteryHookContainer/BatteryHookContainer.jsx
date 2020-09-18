import React, { useState, useEffect } from 'react';
import Battery from '../Battery/Battery';
import {
	register,
	unregister,
} from '../../../utils/battery';

function BatteryHookContainer() {
	const [batteryData, setBatteryData] = useState({
		level: 0.55,
		charging: true,
	});

	useEffect(() => {
		register(updateBattery);
		// console.log('useEffect was called');
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
		</>
	);
}

export default BatteryHookContainer;
