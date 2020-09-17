import React from 'react';
import dogImg from '../../../../images/farming-and-gardening.png';
import './styles/UserAvatar.css';

const BotAvatar = () => {
	return (
		<div className='userIcon'>
			<img src={dogImg} alt='Dog' id='dogImg' />
		</div>
	);
};

export default BotAvatar;
