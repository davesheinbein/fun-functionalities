import React, { useEffect, useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './styles/FunnyJoke.css';

function FunnyJoke() {
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
				url:
					'https://official-joke-api.appspot.com/random_joke',
			}).then((res) => {
				setJoke({
					...joke,
					jokes: res.data,
					isLoaded: true,
				});
			});
			return () => {
				console.log('hitting useEffect - Jokes Button');
			};
		},
		[toggled]
	);

	const { isLoaded } = joke;
	if (!isLoaded) {
		return (
			<>
				<div className='loadingChatbotContianer'>
					<Loader />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='btnBackgroundChatbotContainer'>
					<button
						className='push--skeuoChatbot'
						onClick={() => toggle((toggled) => !toggled)}>
						Click 4
						<br />
						Jokes
					</button>
					<div className='alertChatbotContainer'>
						{toggled && (
							<UncontrolledAlert
								id={joke.jokes.id}
								color='dark'
								className='alertJokeChatbotContainer'>
								{joke.jokes.setup}
								<br />
								<br />
								{joke.jokes.punchline}
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
