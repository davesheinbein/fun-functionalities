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
						I enjoy helping people discover and implement
						interesting ways to scale and grow their
						businesses and helping them reach their goals in
						a logical and creative way.
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
