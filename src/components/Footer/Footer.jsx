import React from 'react';
import './style/Footer.css';
import Battery from '../Battery/BatteryHookContainer/BatteryHookContainer';

function Footer() {
	return (
		<div className='footerContainer'>
			<div className='footerText'>
				&copy;&nbsp;
				<a
					href='https://www.linkedin.com/in/david-sheinbein/'
					className='footerLink'>
					<div style={{ width: 'fit-content' }}>
						David Sheinbein
					</div>
				</a>
				&nbsp; & &nbsp;
				<a
					href='https://www.linkedin.com/in/jasonhur/'
					className='footerLink'>
					<div style={{ width: 'fit-content' }}>
						Jason Hur
					</div>
				</a>
			</div>
			<div className='batteryContainer'>
				<Battery />
			</div>
		</div>
	);
}

export default Footer;
