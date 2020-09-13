import React from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn';
import { Link } from 'react-router-dom';
import './style/Header.css';

function Header(props) {
	return (
		<div className='navbarContainer'>
			<Link to='/' className='logo'>
				<div className='logo'>FunFunctionalities</div>
			</Link>
			<ul className='list'>
				<li className='listItem'>
					<a
						className='listItemLink'
						href='https://github.com/davesheinbein/fun-functionalities'>
						Github
					</a>
				</li>
				<li className='listItem'>
					<a
						className='listItemLink'
						href='https://www.linkedin.com/in/david-sheinbein/'>
						LinkedIn
					</a>
				</li>
			</ul>
			<div className='switchBtn'>
				<SwitchBtn
					handleThemeChange={props.handleThemeChange}
				/>
			</div>
		</div>
	);
}

export default Header;
