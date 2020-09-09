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
// Box 11 - Box ?
// Box 12 - Box ?
import BoxGroupC from '../BoxGroups/BoxGroupC/BoxGroupC';

// Box Group D
// Page effect - Box Thirteen
// Color Components generator - Box Fourteen
// Mouse effect - Box Fifteen
// Email - Nodemailer - Box Sixteen
import BoxGroupD from '../BoxGroups/BoxGroupD/BoxGroupD';

// Heading
import Header from '../Header/Header';
// Home Page
import Home from '../Home/Home';

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
	const { location } = useContext(__RouterContext);
	console.log('location', location);
	console.log('__RouterContext', __RouterContext);
	const transitionsHome = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
				transform: 'rotateZ(360deg)',
			},
			enter: { opacity: 1, transform: 'rotateZ(0deg)' },
			leave: {
				opacity: 0,
				transform: 'rotateZ(360deg)',
			},
		}
	);
	const transitionsLeft = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
			enter: { opacity: 1, transform: 'translate(0%, 0%)' },
			leave: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
		}
	);
	const transitionsRight = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
			enter: { opacity: 1, transform: 'translate(0%, 0%)' },
			leave: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
		}
	);
	const transitionsTop = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
			enter: { opacity: 1, transform: 'translate(0%, 0%)' },
			leave: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
		}
	);
	const transitionsBottom = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
			},
			enter: { opacity: 1, transform: 'translate(0%, 0%)' },
			leave: {
				opacity: 0,
				transform: 'translate(100%, 0%)',
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
			{transitionsHome.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/'
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
					</Switch>
				</animated.div>
			))}
			{transitionsLeft.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
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
					</Switch>
				</animated.div>
			))}
			{transitionsTop.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
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
					</Switch>
				</animated.div>
			))}
			{transitionsRight.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
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
					</Switch>
				</animated.div>
			))}
			{transitionsBottom.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
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
				</animated.div>
			))}
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
