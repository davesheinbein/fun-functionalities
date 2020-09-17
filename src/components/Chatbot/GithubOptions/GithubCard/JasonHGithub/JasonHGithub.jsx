import React from 'react';
import './styles/JasonHGithub.css';

function JasonHGithub() {
	return (
		<>
			<div className='githubContainer'>
				<div className='heading'>Jason Hur Info</div>
				<br />
				<div className='description'>
					<div className='descriptionTitle'>Github:</div>
					<div className='descriptionText'>
						I enjoy helping people discover and implement
						interesting ways to scale and grow their
						businesses and helping them reach their goals in
						a logical and creative way.
					</div>
					<div className='linkContainer'>
						<button className='btnPortfolio'>
							<a href='https://github.com/davesheinbein'>
								Github Link
							</a>
						</button>
					</div>
					<div className='descriptionTitle'>LinkedIn:</div>
					<div className='descriptionText'>
						<span>
							Full-Stack Software Engineering Skills:
						</span>
						HTML5, CSS, JavaScript, Express, Node.js,
						Django, Mongoose, MongoDB, Python, PostreSQL,
						React, React-spring, Animations, Axios,
						Nodemailer
						<br />
						<span>Developer Tools:</span>
						Git, GitHub, MongoDB Atlas, Postman, Heroku,
						Namecheap, AWS, Third Party APIs
						<br />
						<span>Project Management Skills:</span>
						Scheduling, Timeline Management, Outreach
						Strategy and Management, Research, Microsoft
						Office Suite, Teamwork, Marketing
						<br />
						<span>Creative Skills:</span>
						Wireframing, Adobe Creative Suite, Photography,
						Videography, Canva, Web Design, Undraw,
						LottieFiles, Google Fonts
					</div>
					<div className='linkContainer'>
						<button className='btnPortfolio'>
							<a href='https://www.linkedin.com/in/david-sheinbein/'>
								LinkedIn Link
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
			</div>
		</>
	);
}

export default JasonHGithub;
