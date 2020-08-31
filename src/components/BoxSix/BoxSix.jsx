import React, { useEffect, useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './style/BoxSix.css';

function BoxSix() {
	const [toggled, toggle] = useState(false);
	const [state, setState] = useState({
		jokes: '',
		error: null,
		isLoaded: false,
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const result = await axios.get(
			'https://api.chucknorris.io/jokes/random'
		);
		console.log(result, ' <<< result');
		console.log(
			result.data.value,
			' <<< result.data.value'
		);
		setState({
			...state,
			jokes: result.data,
			isLoaded: true,
		});
		const error = () => {
			setState({
				...state,
				isLoaded: true,
				error,
			});
		};
	};

	const { error, isLoaded } = state;
	if (error) {
		return (
			<div className='errorContianer'>
				Error: {error.message}
			</div>
		);
	} else if (!isLoaded) {
		return (
			<>
				<div className='loadingContianer'>
					<Loader />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='btnbackgroundContainer'>
					<button
						className='push--skeuo'
						onClick={
							(() => fetchData(),
							() => toggle((toggled) => !toggled))
						}>
						Chuck
						<br />
						Norris
					</button>
					<div>
						{toggled && (
							<UncontrolledAlert
								id={state.jokes.id}
								color='dark'
								className='alertNorrisFactContainer'>
								{state.jokes.value}
							</UncontrolledAlert>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default BoxSix;
