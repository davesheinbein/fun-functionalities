import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBtns.css';

export default function NavGroupB() {
	return (
		<Link to='/boxGroupB' className='NavLink'>
			<div className='bottomCircle'></div>
		</Link>
	);
}
