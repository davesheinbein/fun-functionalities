import React from 'react';
import './styles/JasonHGithub.css';

function JasonHGithub() {
	return (
		<>
			<div className='githubContainerJh'>
				<div className='headingJh'>Jason Hur Info</div>
				<br />
				<div className='descriptionJh'>
					<div className='descriptionTitleJh'>Github:</div>
					<div className='descriptionTextJh'>
						As a software engineer, I love tackling new problems 
						and learning new skills to make clean and responsive 
						web apps! I am a full stack engineer with a passion 
						towards the front-end, especially when using React. 
					</div>
					<div className='linkContainerJh'>
						<a href='https://github.com/davesheinbein'>
							<button className='btnPortfolioJh'>
								Github
							</button>
						</a>
					</div>
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

export default JasonHGithub;
