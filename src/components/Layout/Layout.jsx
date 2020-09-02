import React from 'react';

// Boxes V
// Animate shape
import BoxOne from '../BoxOne/BoxOne';
// Slide box
import BoxTwo from '../BoxTwo/BoxTwo';
// Draw shape path Star
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
// Framer Animation
import BoxNine from '../BoxNine/BoxNine';
import BoxTen from '../BoxTen/BoxTen';
import BoxEleven from '../BoxEleven/BoxEleven';
import BoxTwelve from '../BoxTwelve/BoxTwelve';
import BoxThirteen from '../BoxThirteen/BoxThirteen';
// import BoxFourteen from '../BoxFourteen/BoxFourteen';
import BoxFifteen from '../BoxFifteen/BoxFifteen';
import BoxSixteen from '../BoxSixteen/BoxSixteen';
// ^^^^

// Heading
import Header from '../../components/Header/Header';
// Footer
import Footer from '../../components/Footer/Footer';

import './style/Layout.css';

function Layout() {
	return (
		<div className='layoutContatainer'>
			<div className='headerContainer'>
				<Header />
			</div>
			<div className='container'>
				<BoxOne />
				<BoxTwo />
				<BoxThree />
				<BoxSeven />
				<BoxEight />
				<BoxFour />
				<BoxFive />
				<BoxSix />
				<BoxNine />
				<BoxTen />
				<BoxEleven />
				<BoxTwelve />
				<BoxThirteen />
				{/* <BoxFourteen /> */}
				<BoxFifteen />
				<BoxSixteen />
				<div className='footer'>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
