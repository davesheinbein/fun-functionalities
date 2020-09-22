import React, { useEffect, useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import './style/BoxSix.css';

function BoxSix() {
	const [toggled, toggle] = useState(false);
	const [joke, setJoke] = useState({
		jokes: '',
		isLoaded: false,
	});

	useEffect(
		(joke) => {
			setJoke({ isLoaded: false });
			axios({
				method: 'GET',
				url: 'https://api.chucknorris.io/jokes/random',
			}).then((res) => {
				setJoke({
					...joke,
					jokes: res.data,
					isLoaded: true,
				});
			});
			return () => {
				console.log(
					'hitting useEffect - Chuck Norris Button'
				);
			};
		},
		[toggled]
	);

	const { isLoaded } = joke;
	if (!isLoaded) {
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
						onClick={() => toggle((toggled) => !toggled)}>
						Chuck
						<br />
						Norris
					</button>
					<div className='alertContainer'>
						{toggled && (
							<UncontrolledAlert
								id={joke.jokes.id}
								color='dark'
								className='alertNorrisFactContainer'>
								{joke.jokes.value}
							</UncontrolledAlert>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default BoxSix;
