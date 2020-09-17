import React from 'react';
import './styles/PortfolioOptions.css';

const PortfolioOptions = (props) => {
	const portfolioOptions = [
		{
			text: 'David Sheinbein',
			handler: props.actionProvider.portfolioDavidSheinbein,
			id: 1,
		},
		{
			text: 'Jason Hur',
			handler: props.actionProvider.portfolioJasonHur,
			id: 2,
		},
	];

	const buttonsMarkup = portfolioOptions.map((option) => (
		<button
			key={option.id}
			onClick={option.handler}
			className='portfolio-option-button'>
			{option.text}
		</button>
	));

	return (
		<div className='portfolio-options-container'>
			{buttonsMarkup}
		</div>
	);
};

export default PortfolioOptions;
