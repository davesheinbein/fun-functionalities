import React from 'react';
import './styles/DavidSGithub.css';

function DavidSPortfolio(props) {
	return (
		<>
			<div className='githubContainerDs'>
				<div className='headingDs'>
					David Sheinbein Info
				</div>
				<br />
				<div className='descriptionDs'>
					<div className='descriptionTitleDs'>Github:</div>
					<div className='descriptionTextDs'>
						I enjoy helping people discover and implement
						interesting ways to scale and grow their
						businesses and helping them reach their goals in
						a logical and creative way.
					</div>
					<div className='linkContainerDs'>
						<a href='https://github.com/davesheinbein'>
							<button className='btnPortfolioDs'>
								Github
							</button>
						</a>
					</div>
					<div className='descriptionTitleDs'>
						LinkedIn:
					</div>
					<div className='descriptionTextDs'>
						<span>
							Full-Stack Software Engineering Skills:
						</span>{' '}
						<br />
						HTML5, CSS, JavaScript, Express, Node.js,
						Django, Mongoose, MongoDB, Python, PostreSQL,
						React, React-spring, Animations, Axios,
						Nodemailer
						<br />
						<span>Developer Tools:</span> <br />
						Git, GitHub, MongoDB Atlas, Postman, Heroku,
						Namecheap, AWS, Third Party APIs
						<br />
						<span>Project Management Skills:</span> <br />
						Scheduling, Timeline Management, Outreach,
						Strategy, Management, Research, Microsoft Office
						Suite, Teamwork, Marketing, Zoom, Live Share,
						Entity Relationship Diagram, CRM, Trello
						<br />
						<span>Creative Skills:</span> <br />
						Sketch, Wireframing, Adobe Creative Suite,
						Photography, Videography, Canva, Web Design,
						Undraw, LottieFiles, Google Fonts
					</div>
					<div className='linkContainerDs'>
						<button className='btnPortfolioDs'>
							<a href='https://www.linkedin.com/in/david-sheinbein/'>
								LinkedIn
							</a>
						</button>
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

export default DavidSPortfolio;
