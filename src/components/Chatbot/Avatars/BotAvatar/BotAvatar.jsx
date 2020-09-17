import React from 'react';
import robotImg from '../../../../images/robot.png';
import './styles/BotAvatar.css';

const BotAvatar = () => {
	return (
		<div className='avatarIcon'>
			<img src={robotImg} alt='Rob' id='robotImg' />
		</div>
	);
};

export default BotAvatar;
