import React, { Component } from 'react';
import SignupForm from '../../components/Signup/SignUpForm';
import './style/SignupForm.css';

export class SignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	};

	render() {
		return (
			<div className='signUpPage'>
				<SignupForm
					{...this.props}
					updateMessage={this.updateMessage}
				/>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default SignUpPage;
