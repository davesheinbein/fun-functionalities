import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import './style/BoxTen.css';

const Words = [
	`Hello world`,
	' Hey',
	' Hola',
	' Yo',
	' Elo',
];

export default class BoxTen extends React.Component {
	state = { toggle: true, text: [Words] };
	onToggle = () =>
		this.setState((state) => ({ toggle: !state.toggle }));
	onAddText = () =>
		this.setState((state) => ({
			toggle: true,
			text: [
				...state.text,
				Words.map((Word) => Word.length),
			],
		}));
	onRemoveText = () =>
		this.setState((state) => ({
			toggle: true,
			text: state.text.slice(1),
		}));
	render() {
		const { toggle, text } = this.state;
		return (
			<div className='auto-main'>
				<div className='buttons-list'>
					<button onClick={this.onToggle}>Toggle</button>
					<button onClick={this.onAddText}>Add text</button>
					<button onClick={this.onRemoveText}>
						Remove text
					</button>
				</div>
				<div className='content'>
					<Spring
						native
						force
						config={{
							tension: 2000,
							friction: 100,
							precision: 1,
						}}
						from={{ height: toggle ? 0 : 'auto' }}
						to={{ height: toggle ? 'auto' : 0 }}>
						{(props) => (
							<animated.div className='item' style={props}>
								{text.map((t, i) => (
									<p key={i}>{t}</p>
								))}
							</animated.div>
						)}
					</Spring>
				</div>
			</div>
		);
	}
}
