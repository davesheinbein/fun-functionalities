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
// Chuck Norris Fact Generator
import BoxSix from '../BoxSix/BoxSix';
// profile slider
import BoxSeven from '../BoxSeven/BoxSeven';
// Slide animation
import BoxEight from '../BoxEight/BoxEight';

import BoxNine from '../BoxNine/BoxNine';
// ^^^^

import './style/Layout.css';

function Layout() {
	return (
		<div className='container'>
			<BoxOne />
			<BoxTwo />
			<BoxThree />
			<BoxThree />
			<BoxFour />
			<BoxSeven />
			<BoxEight />
			<BoxFive />
			<BoxSix />
			<BoxNine />
		</div>
	);
}

export default Layout;
