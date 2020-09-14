import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Goo from '../Goo/Goo';
import './style/Forgot.css';

export class Forgot extends Component {
	render() {
		return (
			<div className='forgotContainer'>
				<div className='forgotForm'>
					<div className='forgotFormText'>
						Forgot Password
					</div>
					<div className='forgotFormSubText'>
						Send reset link to email
					</div>
					<Form className='inputForgotContainer'>
						<Input
							size='small'
							className='inputForgot'
							type='email'
							placeholder='Email'
							name='email'
						/>
						<Button
							size='small'
							type='primary'
							htmlType='submit'
							className='emailSubmitFormButton'
							children='Submit'
						/>
					</Form>
				</div>
				<div className='gooContain'>
					<Goo />
				</div>
			</div>
		);
	}
}

export default Forgot;
