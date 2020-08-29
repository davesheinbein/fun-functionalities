import React from 'react';
import BoxOne from '../BoxOne/BoxOne';
import BoxTwo from '../BoxTwo/BoxTwo';
import BoxThree from '../BoxThree/BoxThree';
import './style/Layout.css';

function Layout() {
	return (
		<div className='container'>
			<BoxOne />
			<BoxTwo />
			<BoxThree />
			<BoxTwo />
		</div>
	);
}

export default Layout;
