import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import './style/SwitchBtn.css';

export class SwitchBtn extends Component {
	state = {
		disabled: true,
	};

	toggle = () => {
		this.setState({
			disabled: !this.state.disabled,
		});
	};

	render(props) {
		return (
			<div className='switchContainer'>
				<Switch
					disabled={this.state.disabled}
					defaultChecked
					className='switch'
					onClick={() => {
						this.props.handleThemeChange(
							'disabled' ? 'black' : 'default'
						);
					}}
				/>
				<br />
				<Button
					type='primary'
					onClick={this.toggle}
					className='disableBtn'>
					Disable
				</Button>
			</div>
		);
	}
}

export default SwitchBtn;
