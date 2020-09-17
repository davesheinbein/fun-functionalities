import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import Goo from '../Goo/Goo';
import userService from '../../services/userServices';
import { connect } from 'react-redux';
import {
	handleLogout,
	handleSignupOrLogin,
} from '../../actions/index';
import './style/SignupForm.css';

export class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	};

	handleChange = (e) => {
		this.props.updateMessage('');
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userService.signup(this.state);
			this.props.handleSignupOrLogin();
			this.props.history.push('/');
		} catch (err) {
			this.props.updateMessage(err.message);
		}
	};

	isFormInvalid() {
		return !(
			this.state.name &&
			this.state.email &&
			this.state.password === this.state.passwordConfirm
		);
	}

	render() {
		let signUpPageOr = this.props.user ? (
			<div className='signupFormContainer'>
				<div className='signedUpAlreadyForm'>
					<div className='signedUpAlreadyFormText'>
						Already Signed up!
					</div>
					<div className='signedUpAlreadyFormSubText'>
						Thanks for Connecting!
					</div>
					<div className='signedUpAlreadyFormUserText'>
						{this.props.user.name} <br />
						{this.props.user.email}
					</div>
					<div className='signedUpAlreadyIconContainer'>
						<img
							className='signedUpAlreadyIcon'
							src='https://www.flaticon.com/svg/static/icons/svg/826/826955.svg'
							alt='Sun'
						/>
					</div>
				</div>
			</div>
		) : (
			<div className='signupFormContainer'>
				<div className='signupForm'>
					<div className='signupFormText'>Sign up!</div>
					<div className='signupFormSubText'>
						Connect Today!
					</div>
					<Form
						className='inputSignupContainer'
						onSubmit={this.handleSubmit}>
						<Form.Item className='formItems'>
							<Input
								name='name'
								value={this.state.name}
								onChange={this.handleChange}
								required
								type='text'
								size='small'
								className='inputSignup'
								placeholder='Name'
							/>
						</Form.Item>
						<Form.Item className='formItems'>
							<Input
								name='email'
								value={this.state.email}
								onChange={this.handleChange}
								required
								size='small'
								className='inputSignup'
								type='email'
								placeholder='Email'
							/>
						</Form.Item>
						<Form.Item className='formItems'>
							<Input
								name='password'
								value={this.state.password}
								onChange={this.handleChange}
								size='small'
								className='inputSignup'
								type='password'
								placeholder='Password'
							/>
						</Form.Item>
						<Form.Item className='formItems'>
							<Input
								name='passwordConfirm'
								value={this.state.passwordConfirm}
								onChange={this.handleChange}
								size='small'
								className='inputSignup'
								type='password'
								placeholder='Confirm Password'
							/>
						</Form.Item>
						<Form.Item className='formItems'>
							<Button
								disabled={this.isFormInvalid()}
								size='small'
								type='submit'
								className='signupSubmitFormButton'
								children='Submit'
								onClick={this.handleSubmit}
							/>
						</Form.Item>
						<Link to='/boxGroupA' className='cancelLink'>
							<div className='cancelLinkText'>Cancel</div>
						</Link>
					</Form>
				</div>
				<div className='gooContain'>
					<Goo />
				</div>
			</div>
		);
		return <div>{signUpPageOr}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = () => {
	return {
		handleSignupOrLogin,
		handleLogout,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps()
)(Signup);
