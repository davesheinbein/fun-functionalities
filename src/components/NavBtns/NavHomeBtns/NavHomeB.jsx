import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavHomeBtns.css';

export default function NavHomeB() {
	return (
		<Link to='/' className='NavLink'>
			<div className='topHomeTriangle'></div>
		</Link>
	);
}
