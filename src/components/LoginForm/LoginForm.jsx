import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Avatar,
	Form,
	Input,
	Button,
	Checkbox,
} from 'antd';
import {
	UserOutlined,
	LockOutlined,
} from '@ant-design/icons';
import userService from '../../services/userServices';
import 'antd/dist/antd.css';
import './style/LoginForm.css';

export class LoginForm extends Component {
	state = { email: '', password: '' };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userService.login(this.state);
			this.props.handleSignupOrLogin();
			this.props.history.push('/');
		} catch (err) {
			alert('Invalid Credentials!');
		}
	};
	render() {
		return (
			<div className='loginFormContainer'>
				<Form
					className='formLoginContainer'
					onSubmit={this.handleSubmit}>
					<Avatar
						src='https://semantic-ui.com/images/avatar2/large/elyse.png'
						className='ant-avatar'
					/>
					<div className='alignFlex'>
						<div className='dirFlexContainer'>
							<UserOutlined
								type='user'
								style={{
									color: 'rgba(0,0,0,1)',
									width: '15%',
									height: '3vh',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
									alignContent: 'center',
									margin: 0,
								}}
								id='userIcon'
							/>
							Email
						</div>
						<Form.Item className='loginFormItem'>
							<Input
								size='small'
								style={{
									height: '4vh',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignContent: 'center',
									margin: 0,
								}}
								autoComplete='none'
								type='email'
								placeholder='Email'
								name='email'
								value={this.state.email}
								onChange={this.props.handleChange}
							/>
						</Form.Item>
					</div>
					<div className='alignFlex'>
						<div className='dirFlexContainer'>
							<LockOutlined
								type='lock'
								style={{
									color: 'rgba(0,0,0,1)',
									width: '15%',
									height: '3vh',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignContent: 'center',
								}}
								id='passwordIcon'
							/>
							Password
						</div>
						<Form.Item className='loginFormItem'>
							<Input
								size='small'
								style={{
									height: '4vh',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignContent: 'center',
									margin: 0,
								}}
								autoComplete='none'
								type='password'
								placeholder='Password'
								name='password'
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</Form.Item>
					</div>
					<Fragment id='submissionContainer'>
						<div className='flexDirContainer'>
							<Checkbox size='small' id='checkbox'>
								Remember me
							</Checkbox>
							<Link to='/forgot' className='signup'>
								<a
									className='login-form-forgot'
									children='Forgot password'
									href='/forgot'
								/>
							</Link>
						</div>
						<div className='flexDirContainer'>
							<Button
								size='small'
								type='primary'
								htmlType='submit'
								className='login-form-button'
								children='Log in'
								style={{
									margin: '0px 1em',
									padding: '1em 7px',
								}}
							/>
							<Link to='/signup' className='signup'>
								<button id='signup'>Signup</button>
							</Link>
						</div>
					</Fragment>
				</Form>
			</div>
		);
	}
}

export default LoginForm;
