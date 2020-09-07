import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Boxes V
// Animate shape
import BoxOne from '../BoxGroups/BoxGroupA/BoxOne/BoxOne';
// Slide box
import BoxTwo from '../BoxGroups/BoxGroupA/BoxTwo/BoxTwo';
// Draw shape path Star
import BoxThree from '../BoxGroups/BoxGroupA/BoxThree/BoxThree';
// Color Scroller
import BoxFour from '../BoxGroups/BoxGroupB/BoxFour/BoxFour';
// 15-slot puzzle game
import BoxFive from '../BoxGroups/BoxGroupB/BoxFive/BoxFive';
// Chuck Norris Fact Generator
import BoxSix from '../BoxGroups/BoxGroupB/BoxSix/BoxSix';
// profile slider
import BoxSeven from '../BoxGroups/BoxGroupA/BoxSeven/BoxSeven';
// Slide animation
import BoxEight from '../BoxGroups/BoxGroupB/BoxEight/BoxEight';
// Framer Animation
import BoxNine from '../BoxGroups/BoxGroupC/BoxNine/BoxNine';
// Toggle Text
import BoxTen from '../BoxGroups/BoxGroupC/BoxTen/BoxTen';
import BoxEleven from '../BoxGroups/BoxGroupC/BoxEleven/BoxEleven';
import BoxTwelve from '../BoxGroups/BoxGroupC/BoxTwelve/BoxTwelve';
// Page effect
import BoxThirteen from '../BoxGroups/BoxGroupD/BoxThirteen/BoxThirteen';
// Color Components generator
import BoxFourteen from '../BoxGroups/BoxGroupD/BoxFourteen/BoxFourteen';
// Mouse effect
import BoxFifteen from '../BoxGroups/BoxGroupD/BoxFifteen/BoxFifteen';
// Email - Nodemailer
import BoxSixteen from '../BoxGroups/BoxGroupD/BoxSixteen/BoxSixteen';
// ^^^^

// Heading
import Header from '../../components/Header/Header';

import Home from '../../components/Home/Home';

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
					<>
						<div className='homeContainer'>
							<Home />
						</div>
						<div className='homeBtns'>
							<NavGroupA />
							<NavGroupB />
							<NavGroupC />
							<NavGroupD />
						</div>
					</>
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
