import React from 'react';

// Boxes V
// Animate shape
import BoxOne from '../BoxOne/BoxOne';
// Slide box
import BoxTwo from '../BoxTwo/BoxTwo';
// Draw shape path
import BoxThree from '../BoxThree/BoxThree';
// Color Scroller
import BoxFour from '../BoxFour/BoxFour';
// 15-slot puzzle game
import BoxFive from '../BoxFive/BoxFive';

import BoxSix from '../BoxSix/BoxSix';

import './style/Layout.css';

function Layout() {
	return (
		<div className='container'>
			<BoxOne />
			<BoxTwo />
			<BoxThree />
			<BoxFour />
			<BoxFive />
			<BoxSix />
		</div>
	);
}

export default Layout;
