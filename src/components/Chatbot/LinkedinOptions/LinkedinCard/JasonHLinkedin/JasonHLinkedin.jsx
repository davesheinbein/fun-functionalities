import React from 'react';
import './styles/JasonHLinkedin.css';

function JasonHLinkedin() {
	return (
		<>
			<div className='linkedinContainerJh'>
				<div className='headingJh'>Jason Hur Info</div>
				<br />
				<div className='descriptionJh'>
					<div className='descriptionTitleJh'>
						LinkedIn:
					</div>
					<div className='descriptionTextJh'>
						<span>
							Full-Stack Software Engineering Skills:
						</span>{' '}
						<br />
						React, HTML5, CSS, JavaScript, Express, Node.js,
						Django, Mongoose, MongoDB, Python, PostreSQL,
						Sass
						<br />
						<span>Developer Tools:</span> <br />
						Git, GitHub, MongoDB Atlas, Postman, Heroku,
						AWS, Third Party APIs
						<br />
						<span>Project Management Skills:</span> <br />
						Teamwork, Data Analysis, Training/Coaching,
						Public Speaking, Research, Microsoft Excel, Team
						Management
						<br />
						<span>Creative Skills:</span> <br />
						Wireframing, Web Design, Google Fonts
					</div>
					<div className='linkContainerJh'>
						<a href='https://www.linkedin.com/in/jasonhur/'>
							<button className='btnPortfolioJh'>
								LinkedIn
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

export default JasonHLinkedin;
