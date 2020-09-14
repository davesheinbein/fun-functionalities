import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Goo from '../Goo/Goo';
import './style/Reset.css';

export class Forgot extends Component {
	render() {
		return (
			<div className='resetContainer'>
				<div className='resetForm'>
					<div className='resetFormText'>
						Reset Password!
					</div>
					<div className='resetFormSubText'>
						Confirm Reset
					</div>
					<Form className='inputResetContainer'>
						<Input
							size='small'
							className='inputReset'
							type='password'
							placeholder='Password'
							name='password'
						/>
						<Input
							size='small'
							className='inputReset'
							type='password'
							placeholder='Confrim Password'
							name='confirm_password'
						/>
						<Button
							size='small'
							type='primary'
							htmlType='submit'
							className='resetSubmitFormButton'
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
