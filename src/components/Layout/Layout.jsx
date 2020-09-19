import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { __RouterContext } from 'react-router';
import { useTransition, animated } from 'react-spring';

// Box Groups
// Box Group A
// Animate shape - Box One
// Slide box - Box Two
// Draw shape path Star - Box Three
// Login profile slider - Box Seven
import BoxGroupA from '../BoxGroups/BoxGroupA/BoxGroupA';

// Box Group B
// Color Scroller - Box Four
// 15-slot puzzle game - Box Five
// Chuck Norris Fact Generator - Box Six
// Color Slide animation - Box Eight
import BoxGroupB from '../BoxGroups/BoxGroupB/BoxGroupB';

// Box Group C
// Framer Animation - Box Nine
// Toggle Text - Box Ten
// Color Gradient Display - Box Eleven
// D3 Graph - Box Twelve
import BoxGroupC from '../BoxGroups/BoxGroupC/BoxGroupC';

// Box Group D
// Page effect - Box Thirteen
// Text Show/Hide - Box Fourteen
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

// Import Battery
import BatteryPage from '../../pages/BatteryPage/BatteryPage/BatteryPage';

// Import Chatbot
import Chatbots from '../Chatbot/Chatbots';

// Signup
import SignUpPage from '../Signup/SignUpPage';
// Forgot
import Forgot from '../../components/Forgot/Forgot';
// Reset
import Reset from '../../components/Reset/Reset';

// Footer
import Footer from '../../components/Footer/Footer';

import './style/Layout.css';

function Layout(props) {
	const { location } = useContext(__RouterContext);
	// console.log('<<<< location', location);
	// console.log('<<<< __RouterContext', __RouterContext);
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
						<Route
							exact
							path='/boxGroupA'
							render={() => (
								<div className='absoluteContainer'>
									<div className='navHomeContainer'>
										<NavHome />
									</div>
									<div className='boxGroupsContainer'>
										<BoxGroupA
											handleSignupOrLogin={
												props.handleSignupOrLogin
											}
											{...props}
										/>
									</div>
								</div>
							)}
						/>
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
						<Route
							exact
							path='/battery'
							render={() => (
								<div className='absoluteContainer'>
									<div
										className='profileFormsContainer'
										style={{
											position: 'relative',
										}}>
										<BatteryPage />
										<Link to='/' className='returnHomeLink'>
											Home
										</Link>
									</div>
								</div>
							)}
						/>
						<Route
							exact
							path='/signup'
							render={() => (
								<div className='absoluteContainer'>
									<div className='profileFormsContainer'>
										<SignUpPage
											handleSignupOrLogin={
												props.handleSignupOrLogin
											}
											{...props}
										/>
									</div>
								</div>
							)}
						/>
						<Route
							exact
							path='/forgot'
							render={() => (
								<div className='absoluteContainer'>
									<div className='profileFormsContainer'>
										<Forgot />
									</div>
								</div>
							)}
						/>
						<Route
							exact
							path='/reset'
							render={() => (
								<div className='absoluteContainer'>
									<div className='profileFormsContainer'>
										<Reset />
									</div>
								</div>
							)}
						/>
					</Switch>
				</animated.div>
			))}
			<div className='chatbot'>
				<Chatbots />
			</div>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
