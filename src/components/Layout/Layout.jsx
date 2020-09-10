import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { __RouterContext } from 'react-router';
import { useTransition, animated } from 'react-spring';

// Box Groups
// Box Group A
// Animate shape - Box One
// Slide box - Box Two
// Draw shape path Star - Box Three
// profile slider - Box Seven
import BoxGroupA from '../BoxGroups/BoxGroupA/BoxGroupA';

// Box Group B
// // Color Scroller - Box Four
// 15-slot puzzle game - Box Five
// Chuck Norris Fact Generator - Box Six
// Color Slide animation - Box Eight
import BoxGroupB from '../BoxGroups/BoxGroupB/BoxGroupB';

// Box Group C
// Framer Animation - Box Nine
// Toggle Text - Box Ten
// Color Gradient Display - Box ?
// Box 12 - Box ?
import BoxGroupC from '../BoxGroups/BoxGroupC/BoxGroupC';

// Box Group D
// Page effect - Box Thirteen
// ?? - Box Fourteen
// Mouse effect - Box Fifteen
// Email - Nodemailer - Box Sixteen
import BoxGroupD from '../BoxGroups/BoxGroupD/BoxGroupD';

// Heading
import Header from '../Header/Header';
// Home Page
import Home from '../Home/Home';

// Navigation
// Nav Home
import NavHome from '../NavBtns/NavHomeBtns/NavHomeBtn';
// Nav Groups
import NavGroupA from '../NavBtns/NavGroupLinks/NavGroupA';
import NavGroupB from '../NavBtns/NavGroupLinks/NavGroupB';
import NavGroupC from '../NavBtns/NavGroupLinks/NavGroupC';
import NavGroupD from '../NavBtns/NavGroupLinks/NavGroupD';

// Footer
import Footer from '../../components/Footer/Footer';

import './style/Layout.css';

function Layout(props) {
	const { location } = useContext(__RouterContext);
	console.log('location', location);
	console.log('__RouterContext', __RouterContext);
	const transition = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
			},
			enter: {
				opacity: 1,
			},
			leave: {
				opacity: 0,
			},
		}
	);

	return (
		<div className='layoutContatainer'>
			<div className='headerContainer'>
				<Header
					handleThemeChange={props.handleThemeChange}
				/>
			</div>
			{transition.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/'
							render={() => (
								<div className='absoluteContainer'>
									<div className='homeContainer'>
										<Home />
									</div>
									<div className='homeBtns'>
										<NavGroupA />
										<NavGroupB />
										<NavGroupC />
										<NavGroupD />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			{transition.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/boxGroupA'
							render={() => (
								<div className='absoluteContainer'>
									<div className='navHomeContainer'>
										<NavHome />
									</div>
									<div className='boxGroupsContainer'>
										<BoxGroupA />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			{transition.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/boxGroupB'
							render={() => (
								<div className='absoluteContainer'>
									<div className='navHomeContainer'>
										<NavHome />
									</div>
									<div className='boxGroupsContainer'>
										<BoxGroupB />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			{transition.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/boxGroupC'
							render={() => (
								<div className='absoluteContainer'>
									<div className='navHomeContainer'>
										<NavHome />
									</div>
									<div className='boxGroupsContainer'>
										<BoxGroupC />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			{transition.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/boxGroupD'
							render={() => (
								<div className='absoluteContainer'>
									<div className='navHomeContainer'>
										<NavHome />
									</div>
									<div className='boxGroupsContainer'>
										<BoxGroupD />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
