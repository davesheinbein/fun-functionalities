import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Box Groups
// Box Group A
// Animate shape
// Slide box
// Draw shape path Star
// profile slider
import BoxGroupA from '../BoxGroups/BoxGroupA/BoxGroupA';

// Box Group B
// // Color Scroller
// 15-slot puzzle game
// Chuck Norris Fact Generator
// Slide animation
import BoxGroupB from '../BoxGroups/BoxGroupB/BoxGroupB';

// Box Group C
// Framer Animation
// Toggle Text
// Box 11
// Box 12
import BoxGroupC from '../BoxGroups/BoxGroupC/BoxGroupC';

// Box Group D
// Page effect
// Color Components generator
// Mouse effect
// Email - Nodemailer
import BoxGroupD from '../BoxGroups/BoxGroupD/BoxGroupD';

// Heading
import Header from '../../components/Header/Header';
// Home Page
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
			<Switch>
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
							<div>
								<BoxGroupA />
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
							<div>
								<BoxGroupB />
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
							<div>
								<BoxGroupC />
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
							<div>
								<BoxGroupD />
							</div>
						</>
					)}
				/>
			</Switch>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
