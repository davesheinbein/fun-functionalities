import React, { Component } from 'react';
import { Trail, animated } from 'react-spring/renderprops';
import './style/BoxEight.css';

class BoxEight extends Component {
	state = {
		toggle: true,
		items: ['item1', 'item2', 'item3', 'item4', 'item5'],
	};
	toggle = () =>
		this.setState((state) => ({ toggle: !state.toggle }));
	render() {
		const { toggle, items } = this.state;
		return (
			<div
				className='boxEightContainer'
				style={{
					backgroundColor: '#E0C3FC',
					position: 'relative',
					width: '100%',
					height: '100%',
				}}>
				<Trail
					native
					reverse={toggle}
					initial={null}
					items={items}
					from={{ opacity: 0, x: -100 }}
					to={{
						opacity: toggle ? 1 : 0.25,
						x: toggle ? 0 : 100,
					}}>
					{(item) => ({ x, opacity }) => (
						<animated.div
							className='box'
							onClick={this.toggle}
							style={{
								opacity,
								transform: x.interpolate(
									(x) => `translate3d(${x}%,0,0)`
								),
							}}
						/>
					)}
				</Trail>
				<div className='boxEightText'>
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
					<br />
					Hello
				</div>
			</div>
		);
	}
}
export default BoxEight;
