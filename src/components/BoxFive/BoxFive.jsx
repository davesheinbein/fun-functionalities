import React, { Component } from 'react';
import SlidingTilePuzzle from 'react-sliding-tile-puzzle';
import { Button, Segment } from 'semantic-ui-react';
import puzzleImg from '../../images/honey-yanibel-minaya-cruz-9d-67yV9T04-unsplash.jpg';
import './style/BoxFive.css';

class BoxFive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			solvePuzzle: false,
			newPuzzle: false,
		};
	}

	handleClickSolvePuzzle = () => {
		this.setState({ solvePuzzle: !this.state.solvePuzzle });
	};

	handleClickNewPuzzle = () => {
		this.setState({ newPuzzle: !this.state.newPuzzle });
	};

	render() {
		return (
			<>
				<div className='boxFiveContainer'>
					<Segment.Group className='container'>
						<Segment.Group
							// vertical='true'
							className='btnsContainer'>
							<Segment className='segment'>
								<Button
									className='btn'
									fluid
									onClick={this.handleClickNewPuzzle}>
									New
								</Button>
							</Segment>
							<Segment className='segment'>
								<Button
									className='btn'
									fluid
									onClick={this.handleClickSolvePuzzle}>
									Solve
								</Button>
							</Segment>
						</Segment.Group>
						<Segment className='puzzleContainer'>
							<SlidingTilePuzzle
								solvePuzzle={this.state.solvePuzzle}
								newPuzzle={this.state.newPuzzle}
								maxIterations={300}
								image={puzzleImg}
								size={130}
							/>
						</Segment>
					</Segment.Group>
				</div>
			</>
		);
	}
}

export default BoxFive;
