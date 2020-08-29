import React from 'react';
import BoxOne from '../BoxOne/BoxOne';
import BoxTwo from '../BoxTwo/BoxTwo';
import BoxThree from '../BoxThree/BoxThree';
import BoxFive from '../BoxFive/BoxFive';
import BoxFour from '../BoxFour/BoxFour';

import './style/Layout.css';

function Layout() {
	return (
		<div className='container'>
			<BoxOne />
			<BoxTwo />
			<BoxThree />
			<BoxThree />
			<BoxFive />
			<BoxFour />
		</div>
	);
}

export default Layout;
