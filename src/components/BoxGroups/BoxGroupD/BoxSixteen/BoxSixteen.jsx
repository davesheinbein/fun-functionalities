import React, { Component } from 'react';
import {
	Form,
	FormGroup,
	Input,
	Label,
	Button,
} from 'reactstrap';
import axios from 'axios';
import './style/BoxSixteen.css';

export default class BoxSixteen extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	async handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state;
		await axios.post('/api/form', {
			name,
			email,
			subject,
			message,
		});

		axios({
			method: 'POST',
			url: 'http://localhost:3001/api/form',
			headers: { 'Access-Contol-Allow-Origin': '*' },
			data: {
				name: name,
				email: email,
				subject: subject,
				message: message,
			},
		}).then((response) => {
			if (response.data.msg === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.msg === 'fail') {
				alert('Message failed to send.');
			}
		});
	}

	resetForm() {
		document.getElementById('contact-form').reset();
	}

	render() {
		return (
			<div className='formContainer'>
				<h2 className='contactTitle'>Get In Touch!</h2>
				<Form
					id='contact-form'
					onSubmit={this.handleSubmit}>
					<FormGroup>
						<div className='form-inputs-container'>
							<Label for='name' className='label'>
								<i
									className='fa fa-user iconSymbol'
									aria-hidden='true'></i>
								<div className='label-text'>User</div>
							</Label>
							<Input
								type='text'
								name='name'
								className='input-field'
								onChange={this.handleChange}
								placeholder='Name'
								autoComplete='off'
							/>
						</div>
					</FormGroup>
					<FormGroup>
						<div className='form-inputs-container'>
							<Label for='email' className='label'>
								<i
									className='fa fa-envelope iconSymbol'
									aria-hidden='true'></i>
								<div className='label-text'>Email</div>
							</Label>
							<Input
								type='email'
								name='email'
								className='input-field'
								onChange={this.handleChange}
								placeholder='Email'
								autoComplete='off'
							/>
						</div>
					</FormGroup>
					<FormGroup>
						<div className='form-inputs-container'>
							<Label for='subject' className='label'>
								<i
									className='fa fa-sticky-note iconSymbol'
									aria-hidden='true'></i>
								<div className='label-text'>Subject</div>
							</Label>
							<Input
								type='text'
								name='subject'
								className='input-field'
								onChange={this.handleChange}
								placeholder='Subject'
								autoComplete='off'
							/>
						</div>
					</FormGroup>
					<FormGroup>
						<div className='form-inputs-container'>
							<Label for='message' className='label'>
								<i
									className='fa fa-pencil iconSymbol'
									aria-hidden='true'></i>
								<div className='label-text'>Message</div>
							</Label>
							<Input
								type='textarea'
								name='message'
								className='input-field input-textarea'
								onChange={this.handleChange}
								placeholder='Message'
								autoComplete='off'
							/>
						</div>
					</FormGroup>
					<Button id='submit-btn' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
