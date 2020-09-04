import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import './style/App.css';

const GlobalStyle = createGlobalStyle`
${(props) => {
	switch (props.color) {
		case 'black':
			return `:root{
			--headerColor: #000000;
			--titleColor: #000000;
			--secondaryColor: #0B0A0A;

			// BoxFour Colors
			--colorOne: #8ced7d;
			--colorTwo: #b3897b;
			--colorThree: #98faff;
			--colorFour: #d3ffa6;
			--colorFive: #f3ccb9;
			--colorSix: #aafcd2;
			--colorSeven: #b98c87;
			--colorEight: ##d4d8fe;

			// Box Backgrounds
			--boxTwoBg: radial-gradient(circle, rgba(255,199,123,1) 0%, rgba(224,148,233,1) 100%);
			--boxThreeBg: radial-gradient(circle, rgba(233,216,148,1) 0%, rgba(123,189,255,1) 100%);
			--boxFiveBg: linear-gradient(90deg, rgba(148,233,219,1) 0%, rgba(255,175,123,1) 100%);

			--mainText: #ffffff;
			--subText: rgba(255, 255, 255, .75);
			--secondaryText: #ffffff;
			--TertiaryText: #ffffff;
			
			--Btn: #5E5E5E;
			--BtnHover:  rgba(255, 55, 255, 1);
			--BtnText: #000000;

			--formColor: #b5b5b5;
			--textBoxTextTitle: rgba(255, 255, 255, 1);
			--textBoxText: rgba(255, 255, 255, .95);
			--shadow: rgb(255, 255, 255, 0.25);

			--background: none;
			--DisplayNone: none;

		}`;
		default:
		case 'default':
			return `:root {
			--headerColor:#ffffff;
			--titleColor: #F1F1F1;
			--secondaryColor:#FFFCFC;

			// BoxFour Colors
			--colorOne: crimson;
			--colorTwo: teal;
			--colorThree: coral;
			--colorFour: hotpink;
			--colorFive: skyblue;
			--colorSix: salmon;
			--colorSeven: seagreen;
			--colorEight: peachpuff;

			// Box Backgrounds
			--boxTwoBg: radial-gradient(circle, rgba(224,148,233,1) 0%, rgba(255,199,123,1) 100%);
			--boxThreeBg: radial-gradient(circle, rgba(123,189,255,1) 0%, rgba(233,216,148,1) 100%);
			--boxFiveBg: linear-gradient(90deg, rgba(255,175,123,1) 0%, rgba(148,233,219,1) 100%);

			--mainText:#000000;
			--subText: rgba(0, 0, 0, .75);
			--secondaryText:#084181;
			--TertiaryText: #ffffff;
			
			--Btn: #084181;
			--BtnHover: rgba(0, 0, 0, 1);
			--BtnText: #63dbff;

			--formColor: #ffffff;
			--textBoxTextTitle: rgba(0, 0, 0, 1);
			--textBoxText: rgba(0, 0, 0, 1);
			--shadow: rgb(0, 0, 0, 0.75);

			--background: none;
			--DisplayNone: none;

		}`;
	}
}}
`;

class App extends Component {
	/*--- State ---*/
	constructor(props) {
		super(props);
		/*--- State ---*/

		this.state = {
			color: 'default',
		};
		this.handleThemeChange = this.handleThemeChange.bind(
			this
		);
	}

	/*--- Handle Methods ---*/

	handleThemeChange(color) {
		this.setState({
			color,
		});
	}

	/*--- Lifecycle Methods ---*/

	render() {
		return (
			<div className='App'>
				<GlobalStyle color={this.state.color} />
				<Layout
					handleThemeChange={this.handleThemeChange}
				/>
			</div>
		);
	}
}
export default App;
