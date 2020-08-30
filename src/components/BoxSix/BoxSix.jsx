import React, { useEffect, useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import lottie from 'lottie-web'
import './style/BoxSix.css';

function BoxSix() {
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
			<div className='loadingContianer'>Loading...</div>
		);
	} else {
		return (
			<>
				<div className='btnbackgroundContainer'>
					<button class='push--skeuo'>
						Chuck
						<br />
						Norris
					</button>
					<UncontrolledAlert
						color='dark'
						className='alertNorrisFactContainer'>
						{state.jokes.value}
					</UncontrolledAlert>
				</div>
			</>
		);
	}
}

export default BoxSix;
