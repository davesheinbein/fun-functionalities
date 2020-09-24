import React from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleLogout } from '../../actions/index';
import './style/Header.css';

function Header(props) {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	// console.log(user, '<<<<<< userSelector User');
	const HeadPageOr = user ? (
		<div className='navbarContainer'>
			<Link to='/home' className='logo'>
				<div className='logo'>FunFunctionalities</div>
			</Link>
			<ul className='list'>
				<li className='listItem'>
					<a
						className='listItemLink'
						href='https://github.com/davesheinbein/fun-functionalities'>
						<div style={{ width: 'fit-content' }}>
							Github
						</div>
					</a>
				</li>
				<li className='listItem'>
					<Link
						to='/boxGroupA'
						onClick={() => dispatch(handleLogout())}
						className='listItemLink'>
						Log Out
					</Link>
				</li>
			</ul>
			<div className='switchBtn'>
				<SwitchBtn
					handleThemeChange={props.handleThemeChange}
				/>
			</div>
		</div>
	) : (
		<div className='navbarContainer'>
			<Link to='/home' className='logo'>
				<div className='logo'>FunFunctionalities</div>
			</Link>
			<ul className='list'>
				<li className='listItem'>
					<a
						className='listItemLink'
						href='https://github.com/davesheinbein/fun-functionalities'>
						<div
							style={{ width: 'fit-content' }}
							className='listItems'>
							Github
						</div>
					</a>
				</li>
				<li className='listItem'>
					<Link to='/signup' className='listItemLink'>
						<div
							style={{ width: 'fit-content' }}
							className='listItems'>
							Sign Up
						</div>
					</Link>
				</li>
			</ul>
			<div className='switchBtn'>
				<SwitchBtn
					handleThemeChange={props.handleThemeChange}
				/>
			</div>
		</div>
	);

	return <>{HeadPageOr}</>;
}

export default Header;
