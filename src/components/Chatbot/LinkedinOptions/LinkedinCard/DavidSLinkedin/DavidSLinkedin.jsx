import React from 'react';
import './styles/DavidSLinkedin.css';

function DavidSLinkedin() {
	return (
		<>
			<div className='linkedinContainerDs'>
				<div className='headingDs'>
					David Sheinbein Info
				</div>
				<br />
				<div className='descriptionDs'>
					<div className='descriptionTitleDs'>
						LinkedIn:
						<br />
						<span>
							Full Stack Developer, Front End Developer,
							Back End Developer, Software Engineer
						</span>
					</div>
					<div className='descriptionTextDs'>
						<br />
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
						Git, linkedin, MongoDB Atlas, Postman, Heroku,
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
						<a href='https://www.linkedin.com/in/david-sheinbein/'>
							<button className='btnPortfolioDs'>
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

export default DavidSLinkedin;
