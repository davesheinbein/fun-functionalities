import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBtns.css';

export default function NavGroupC() {
	return (
		<Link to='/boxGroupC' className='NavLink'>
			<div className='leftTriangle'></div>
		</Link>
	);
}
