import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

import './style/BoxFourteen.css';

const items = ['Hello', 'You!', 'Click', 'Me!'];
const config = { mass: 5, tension: 2000, friction: 200 };

function BoxFourteen() {
	const [toggle, set] = useState(true);
	const trail = useTrail(items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

	return (
		<div className='boxFourteenContain'>
			<div
				className='trails-main'
				onClick={() => set((state) => !state)}>
				<div className='trails-container'>
					{trail.map(({ x, height, ...rest }, index) => (
						<animated.div
							key={items[index]}
							className='trails-text'
							style={{
								...rest,
								transform: x.interpolate(
									(x) => `translate3d(0,${x}px,0)`
								),
							}}>
							<animated.div style={{ height }}>
								{items[index]}
							</animated.div>
						</animated.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BoxFourteen;
