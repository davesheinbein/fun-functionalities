import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBtns.css';

export default function NavGroupA() {
	return (
		<Link to='/boxGroupA' className='NavLink'>
			<div className='rightTriangle'></div>
		</Link>
	);
}
