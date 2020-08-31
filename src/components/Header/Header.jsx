import React from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn';
import './style/Header.css';

function Header() {
	return (
		<div className='navbarContainer'>
			<div className='logo'>FunFunctionalities</div>
			<ul className='list'>
				<li className='listItem'>Github</li>
				<li className='listItem'>Hello</li>
			</ul>
			<div className='switchBtn'>
				<SwitchBtn />
			</div>
		</div>
	);
}

export default Header;
