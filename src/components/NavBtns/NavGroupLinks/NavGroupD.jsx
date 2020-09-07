import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBtns.css';

export default function NavGroupD() {
	return (
		<Link to='/boxGroupD' className='NavLink'>
			<div className='topTriangle'></div>
		</Link>
	);
}
