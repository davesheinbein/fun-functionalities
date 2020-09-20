import React from 'react';
import './styles/DavidSGithub.css';

function DavidSGithub() {
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
						a logical and creative way. Programming is one
						of the most versatile and important skills a
						person can have in today's business world. It
						enables developers to craft programs unique to
						any business's specific needs thus facilitating
						that business' growth.
					</div>
					<div className='descriptionTitleDs'>Skills:</div>
					<div className='descriptionTextDs'>
						HTML5 | CSS | SASS | SCSS | JavaScript | Express
						| Node.js | Django | Mongoose | MongoDB | Python
						| PostgreSQL | React | React-spring | Animations
						| Axios | Nodemailer | Git | GitHub | MongoDB
						Atlas | Postman | Heroku | Namecheap | AWS |
						Third Party APIs | Scheduling | Timeline
						Management | Outreach Strategy and Management |
						Research | Microsoft Office Suite | Teamwork |
						Marketing | Wireframing | Adobe Creative Suite |
						Photography | Videography | Canva | Web Design |
						Undraw | LottieFiles | Google Fonts
					</div>
					<div className='linkContainerDs'>
						<a href='https://github.com/davesheinbein'>
							<button className='btnPortfolioDs'>
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

export default DavidSGithub;
