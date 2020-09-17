import React from 'react';
import './styles/JasonHPortfolio.css';

function JasonHPortfolio() {
	return (
		<>
			<div className='portfolioContainerJh'>
				<div className='portfolioHeadingJh'>
					Jason Hur's Portfolio
				</div>
				<br />
				<div className='portfolioDescriptionJh'>
					<div className='portfolioDescriptionTitleJh'>
						Description:
					</div>
					<div className='portfolioDescriptionTextJh'>
						As a software engineer, I love tackling new
						problems and learning new skills to make clean
						and responsive web apps. I am a full stack
						engineer with a passion towards the front-end,
						using technologies such as React, NodeJS, HTML,
						CSS, and Javascript. My experiences in back-end
						technologies include Express and Django.
					</div>
					<div className='portfolioLinkJh'>
						<button className='btnPortfolioJh'>
							<a href='https://jasonhur.herokuapp.com/'>
								Portfolio
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

export default JasonHPortfolio;
