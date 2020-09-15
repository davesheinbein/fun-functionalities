import React, { Component } from 'react';
import Battery from '../Battery/Battery';
import {
	register,
	unregister,
} from '../../../utils/battery';

class BatteryContainer extends Component {
	state = {
		level: 0,
		charging: false,
	};

	updateBattery = ({ level, charging }) => {
		this.setState({ level, charging });
	};

	componentDidMount() {
		register(this.updateBattery);
	}

	componentWillUnmount() {
		unregister(this.updateBattery);
	}

	render() {
		return (
			<div
				className='batterPageContainer'
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 247, 18, .75)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: '30em',
					paddingBottom: '30em',
					paddingLeft: '20em',
					paddingRight: '20em',
				}}>
				<Battery
					level={this.state.level}
					charging={this.state.charging}
				/>
			</div>
		);
	}
}

export default BatteryContainer;
