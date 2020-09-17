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
						<button className='btnPortfolioJh'>
							<a href='https://github.com/davesheinbein'>
								Github
							</a>
						</button>
					</div>
					<div className='descriptionTitleJh'>
						LinkedIn:
					</div>
					<div className='descriptionTextJh'>
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
						Scheduling, Timeline Management, Strategy,
						Management, Research, Microsoft Office Suite,
						Teamwork, Marketing
						<br />
						<span>Creative Skills:</span> <br />
						Wireframing, Adobe Creative Suite, Photography,
						Videography, Canva, Web Design, Undraw,
						LottieFiles, Google Fonts
					</div>
					<div className='linkContainerJh'>
						<button className='btnPortfolioJh'>
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

export default JasonHGithub;
