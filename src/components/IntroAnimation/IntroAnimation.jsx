import React from 'react';
import { Link } from 'react-router-dom';
import gear from '../../images/gear.png';
import './style/IntroAnimation.css';

function IntroAnimation() {
	return (
		<div className='introAnimationContainer'>
			<div className='introAnimationImgContainer'>
				<img
					className='introAnimationImg'
					src={gear}
					alt='gear'
				/>
			</div>
			<div className='introAnimationMainText'>
				<Link to='/home' className='introAnimationListLink'>
					<div className='endTextContainer'>
						<ul className='endTextList'>
							<li className='endTextListItem'>Fun</li>
							<li className='endTextListItem'>
								Functionalities
							</li>
						</ul>
					</div>
				</Link>
			</div>
			<Link to='/home' className='introAnimationLink'>
				<button className='continue'>Continue</button>
			</Link>
		</div>
	);
}

export default IntroAnimation;
