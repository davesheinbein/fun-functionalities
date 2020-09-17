import React, { Component } from 'react';
import {
	Keyframes,
	animated,
} from 'react-spring/renderprops';
import { MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import delay from 'delay';
import LoginForm from '../../../LoginForm/LoginForm';
import './style/BoxSeven.css';

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
	// Slots can take arrays/chains,
	peek: [
		{ x: 0, from: { x: -100 }, delay: 500 },
		{ x: -100, delay: 800 },
	],
	// single items,
	open: { delay: 0, x: 0 },
	// or async functions with side-effects
	close: async (call) => {
		await delay(400);
		await call({ delay: 0, x: -100 });
	},
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
	peek: [
		{
			x: 0,
			opacity: 1,
			from: { x: -100, opacity: 0 },
			delay: 600,
		},
		{ x: -100, opacity: 0, delay: 0 },
	],
	open: { x: 0, opacity: 1, delay: 100 },
	close: { x: -100, opacity: 0, delay: 0 },
});

const items = [<LoginForm />];

class BoxSeven extends Component {
	state = { open: undefined };

	toggle = () =>
		this.setState((state) => ({ open: !state.open }));

	render() {
		console.log(this.state, '<<<<<  this.state');
		const state =
			this.state.open === undefined
				? 'peek'
				: this.state.open
				? 'open'
				: 'close';

		console.log(
			this.props.user,
			'<<<<<< Here THis One you idiot'
		);
		let loginProfilePageOr = this.props.user ? (
			<div
				className='profileContainer'
				style={{
					background: 'lightblue',
					width: '100%',
					height: '100%',
				}}>
				<MenuFoldOutlined
					className='sidebar-toggle'
					onClick={this.toggle}
				/>
				<Sidebar native state={state}>
					{({ x }) => (
						<animated.div
							className='sidebar'
							style={{
								transform: x.interpolate(
									(x) => `translate3d(${x}%,0,0)`
								),
							}}>
							<Content
								native
								items={items}
								keys={items.map((_, i) => i)}
								reverse={!this.state.open}
								state={state}
								className='contentContainer'>
								{(item) => ({ x, ...props }) => (
									<animated.div
										style={{
											transform: x.interpolate(
												(x) => `translate3d(${x}%,0,0)`
											),
											...props,
										}}>
										<div className='middle'>{item}</div>
									</animated.div>
								)}
							</Content>
						</animated.div>
					)}
				</Sidebar>
				<div className='boxSevenText'>
					Click the button to Logout
				</div>
			</div>
		) : (
			<div
				className='profileContainer'
				style={{
					background: 'lightblue',
					width: '100%',
					height: '100%',
				}}>
				<MenuFoldOutlined
					className='sidebar-toggle'
					onClick={this.toggle}
				/>
				<Sidebar native state={state}>
					{({ x }) => (
						<animated.div
							className='sidebar'
							style={{
								transform: x.interpolate(
									(x) => `translate3d(${x}%,0,0)`
								),
							}}>
							<Content
								native
								items={items}
								keys={items.map((_, i) => i)}
								reverse={!this.state.open}
								state={state}
								className='contentContainer'>
								{(item) => ({ x, ...props }) => (
									<animated.div
										style={{
											transform: x.interpolate(
												(x) => `translate3d(${x}%,0,0)`
											),
											...props,
										}}>
										<div className='middle'>{item}</div>
									</animated.div>
								)}
							</Content>
						</animated.div>
					)}
				</Sidebar>
				<div className='boxSevenText'>
					Click the button to Login
				</div>
			</div>
		);
		return <>{loginProfilePageOr}</>;
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(BoxSeven);
