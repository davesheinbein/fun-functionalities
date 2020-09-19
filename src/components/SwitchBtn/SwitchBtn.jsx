import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import './style/SwitchBtn.css';

export class SwitchBtn extends Component {
	state = {
		disabled: true,
		toggled: false,
	};

	disable = () => {
		this.setState({
			disabled: !this.state.disabled,
		});
		console
			.log
			// 'Test Disable <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'
			();
	};

	toggle = () => {
		const toggle = !this.state.toggled;
		this.setState({
			toggled: toggle,
		});
		this.props.handleThemeChange(toggle ? 'dark' : 'light');
		console
			.log
			// 'Test Toggle <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'
			();
	};

	render(props) {
		return (
			<div className='switchContainer'>
				<Switch
					disabled={this.state.disabled}
					defaultChecked
					className='switch'
					onClick={this.toggle}
				/>
				<br />
				<Button
					type='primary'
					onClick={this.disable}
					className='disableBtn'>
					Disable
				</Button>
			</div>
		);
	}
}

export default SwitchBtn;
