import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavHomeBtns.css';

export default function NavHomeC() {
	return (
		<Link to='/' className='NavLink'>
			<div className='rightHomeCircle'></div>
		</Link>
	);
}
