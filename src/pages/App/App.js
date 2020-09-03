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
			--mainColor: #000000;
			--titleColor: #000000;
			--secondaryColor: #0B0A0A;
			--mainText: #ffffff;
			--subText: rgba(255, 255, 255, .75);
			--secondaryText: #ffffff;
			--TertiaryText: #ffffff;
			
			--Btn: #5E5E5E;
			--BtnHover: #ffffff;
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
			--mainColor:#ffffff;
			--titleColor: #F1F1F1;
			--secondaryColor:#FFFCFC;
			--mainText:#000000;
			--subText: rgba(0, 0, 0, .75);
			--secondaryText:#084181;
			--TertiaryText: #ffffff;
			
			--Btn: #084181;
			--BtnHover: #ffffff
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
