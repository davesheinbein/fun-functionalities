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
				<div className='begginingText'>Fu</div>
				<div className='endTextContainer'>
					<ul className='endTextList'>
						<li className='endTextListItem'>n</li>
						<li className='endTextListItem'>
							nctionalities
						</li>
					</ul>
				</div>
			</div>
			<Link to='/home' className='introAnimationLink'>
				<button className='continue'>Continue</button>
			</Link>
		</div>
	);
}

export default IntroAnimation;
