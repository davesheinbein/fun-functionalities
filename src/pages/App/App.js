import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
// import { createGlobalStyle } from 'styled-components';
import userService from '../../services/userServices';
import './style/App.css';

// const GlobalStyle = createGlobalStyle`
// ${(props) => {
// 	switch (props.color) {
// 		case 'black':
// 			return `:root{
// 			--headerColor: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
// 			--titleColor: #000000;
// 			--secondaryColor: #0B0A0A;
// 			// BoxFour Colors
// 			--colorOne: #8ced7d;
// 			--colorTwo: #b3897b;
// 			--colorThree: #98faff;
// 			--colorFour: #d3ffa6;
// 			--colorFive: #f3ccb9;
// 			--colorSix: #aafcd2;
// 			--colorSeven: #b98c87;
// 			--colorEight: ##d4d8fe;
// 			// Box Backgrounds
// 			--boxTwoBg: radial-gradient(circle, rgba(255,199,123,1) 0%, rgba(224,148,233,1) 100%);
// 			--boxThreeBg: radial-gradient(circle, rgba(233,216,148,1) 0%, rgba(123,189,255,1) 100%);
// 			--boxFiveBg: radial-gradient( circle farthest-corner at 10% 20%,  rgba(62,133,238,1) 1.1%, rgba(227,137,240,1) 43.7%, rgba(243,193,124,1) 89.7% );
// 			--mainText: #ffffff;
// 			--subText: rgba(255, 255, 255, .75);
// 			--secondaryText: #ffffff;
// 			--TertiaryText: #ffffff;

// 			--Btn: #5E5E5E;
// 			--BtnHover:  rgba(255, 55, 255, 1);
// 			--BtnText: #000000;
// 			--formColor: #b5b5b5;
// 			--textBoxTextTitle: rgba(255, 255, 255, 1);
// 			--textBoxText: rgba(255, 255, 255, .95);
// 			--shadow: rgb(255, 255, 255, 0.25);
// 			--background: none;
// 			--DisplayNone: none;
// 		}`;
// 		default:
// 		case 'default':
// 			return `:root {
// 			--headerColor: linear-gradient(90deg, #ff6e7f 0%, #bfe9ff 100%);
// 			--titleColor: #F1F1F1;
// 			--secondaryColor:#FFFCFC;
// 			// BoxFour Colors
// 			--colorOne: crimson;
// 			--colorTwo: teal;
// 			--colorThree: coral;
// 			--colorFour: hotpink;
// 			--colorFive: skyblue;
// 			--colorSix: salmon;
// 			--colorSeven: seagreen;
// 			--colorEight: peachpuff;
// 			// Box Backgrounds
// 			--boxTwoBg: radial-gradient(circle, rgba(224,148,233,1) 0%, rgba(255,199,123,1) 100%);
// 			--boxThreeBg: radial-gradient(circle, rgba(123,189,255,1) 0%, rgba(233,216,148,1) 100%);
// 			--boxFiveBg: linear-gradient(90deg, rgba(255,175,123,1) 0%, rgba(148,233,219,1) 100%);
// 			--mainText:#000000;
// 			--subText: rgba(0, 0, 0, .75);
// 			--secondaryText:#084181;
// 			--TertiaryText: #ffffff;

// 			--Btn: #084181;
// 			--BtnHover: rgba(0, 0, 0, 1);
// 			--BtnText: #63dbff;
// 			--formColor: #ffffff;
// 			--textBoxTextTitle: rgba(0, 0, 0, 1);
// 			--textBoxText: rgba(0, 0, 0, 1);
// 			--shadow: rgb(0, 0, 0, 0.75);
// 			--background: none;
// 			--DisplayNone: none;
// 		}`;
// 	}
// }}
// `;

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

	// Old theme change method
	// handleThemeChange(color) {
	// 	this.setState({
	// 		color,
	// 	});
	// }

	// Requires the themeChanger File
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
				{/* Old Styling */}
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
