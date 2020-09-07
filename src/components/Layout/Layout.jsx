import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
// Toggle Text
import BoxTen from '../BoxTen/BoxTen';
import BoxEleven from '../BoxEleven/BoxEleven';
import BoxTwelve from '../BoxTwelve/BoxTwelve';
// Page effect
import BoxThirteen from '../BoxThirteen/BoxThirteen';
// Color Components generator
import BoxFourteen from '../BoxFourteen/BoxFourteen';
// Mouse effect
import BoxFifteen from '../BoxFifteen/BoxFifteen';
// Email - Nodemailer
import BoxSixteen from '../BoxSixteen/BoxSixteen';
// ^^^^

// Heading
import Header from '../../components/Header/Header';

// Navigation
// Nav Home
import NavHomeA from '../NavBtns/NavHomeBtns/NavHomeA';
import NavHomeB from '../NavBtns/NavHomeBtns/NavHomeB';
import NavHomeC from '../NavBtns/NavHomeBtns/NavHomeC';
import NavHomeD from '../NavBtns/NavHomeBtns/NavHomeD';
// Nav Groups
import NavGroupA from '../NavBtns/NavGroupLinks/NavGroupA';
import NavGroupB from '../NavBtns/NavGroupLinks/NavGroupB';
import NavGroupC from '../NavBtns/NavGroupLinks/NavGroupC';
import NavGroupD from '../NavBtns/NavGroupLinks/NavGroupD';

// Footer
import Footer from '../../components/Footer/Footer';

import './style/Layout.css';

function Layout(props) {
	return (
		<div className='layoutContatainer'>
			<div className='headerContainer'>
				<Header
					handleThemeChange={props.handleThemeChange}
				/>
			</div>
			<Route
				exact
				path='/home'
				render={() => (
					<div className='container'>
						{/* This will be the home section */}
						<NavGroupA />
						<NavGroupB />
						<NavGroupC />
						<NavGroupD />
					</div>
				)}
			/>
			<Route
				exact
				path='/boxGroupA'
				render={() => (
					<>
						<NavHomeA />
						<div className='container'>
							<BoxOne />
							<BoxTwo />
							<BoxThree />
							<BoxSeven />
						</div>
					</>
				)}
			/>
			<Route
				exact
				path='/boxGroupB'
				render={() => (
					<>
						<NavHomeB />
						<div className='container'>
							<BoxEight />
							<BoxFour />
							<BoxFive />
							<BoxSix />
						</div>
					</>
				)}
			/>
			<Route
				exact
				path='/boxGroupC'
				render={() => (
					<>
						<NavHomeC />
						<div className='container'>
							<BoxNine />
							<BoxTen />
							<BoxEleven />
							<BoxTwelve />
						</div>
					</>
				)}
			/>
			<Route
				exact
				path='/boxGroupD'
				render={() => (
					<>
						<NavHomeD />
						<div className='container'>
							<BoxThirteen />
							<BoxFourteen />
							<BoxFifteen />
							<BoxSixteen />
						</div>
					</>
				)}
			/>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
