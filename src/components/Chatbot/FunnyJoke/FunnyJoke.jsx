import React, { useEffect, useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import './styles/FunnyJoke.css';

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
				<div className='optionsAdvice'>
				<div>
					Type <span> hi </span> for greeting
				</div>
				<div>
					Type <span> options </span> for main menu
				</div>
				<div>
					Type <span> robot </span> for humor
				</div>
				<div>
					Type <span> joke </span> for joke
				</div>
				<div>
					Type <span> haha </span> for laughter
				</div>
			</div>
			</>
		);
	}
}



export default FunnyJoke;
