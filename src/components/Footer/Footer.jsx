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
					David Sheinbein
				</a>
				&nbsp; & &nbsp;
				<a
					href='https://www.linkedin.com/in/jasonhur/'
					className='footerLink'>
					Jason Hur
				</a>
			</div>
			<div className='batteryContainer'>
				<Battery />
			</div>
		</div>
	);
}

export default Footer;
