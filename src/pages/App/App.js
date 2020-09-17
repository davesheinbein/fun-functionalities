import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
// import { createGlobalStyle } from 'styled-components';
import userService from '../../services/userServices';
import './style/App.css';

// Icons made by https://www.flaticon.com/authors/inipagistudio - https://www.flaticon.com/
class App extends Component {
	/*--- State ---*/
	constructor(props) {
		super(props);
		/*--- State ---*/

		this.state = {
			color: 'default',
			user: userService.getUser(),
		};
		this.handleThemeChange = this.handleThemeChange.bind(
			this
		);
	}

	/*--- Handle Methods ---*/
	// Reuires the themeChnager File
	handleThemeChange(color) {
		this.setState({
			color,
		});
		document.documentElement.setAttribute(
			'themeChanger',
			color
		);
		// console.log(color, '<<<<<<< color');
	}

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	/*--- Lifecycle Methods ---*/

	render() {
		return (
			<div className='App'>
				{/* <GlobalStyle color={this.state.color} /> */}
				<Layout
					handleThemeChange={this.handleThemeChange}
					handleSignupOrLogin={this.handleSignupOrLogin}
				/>
			</div>
		);
	}
}
export default App;
