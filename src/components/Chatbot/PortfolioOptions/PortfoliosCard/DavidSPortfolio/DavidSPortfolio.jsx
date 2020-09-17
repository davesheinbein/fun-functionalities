import React from 'react';
import './styles/DavidSPortfolio.css';

function DavidSPortfolio() {
	return (
		<>
			<div className='portfolioContainerDs'>
				<div className='portfolioHeadingDs'>
					David Sheinbein Portfolio
				</div>
				<br />
				<div className='portfolioDescriptionDs'>
					<div className='portfolioDescriptionTitleDs'>
						Description:
					</div>
					<div className='portfolioDescriptionTextDs'>
						I enjoy helping people discover and implement
						interesting ways to scale and grow their
						businesses and helping them reach their goals in
						a logical and creative way. <br />
						Programming is one of the most versatile and
						important skills a person can have in today's
						business world. It enables developers to craft
						programs unique to any business' specific needs
						thus facilitating that business' growth. <br />
						It excites me to work with established companies
						and contributing to collective goals. It excites
						me to work with startups, helping them from the
						ground up in figuring what they are building and
						helping them do it. I enjoy solving challenges
						as they arise in the workplace and take pride in
						the work I accomplish.
					</div>
					<div className='portfolioLinkDs'>
						<a href='https://github.com/davesheinbein/david-s-portfolio'>
							<button className='btnPortfolioDs'>
								Portfolio Link
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

export default DavidSPortfolio;
