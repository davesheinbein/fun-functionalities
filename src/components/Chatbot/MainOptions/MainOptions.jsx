import React from 'react';

import './styles/MainOptions.css';

const MainOptions = (props) => {
	const mainOptions = [
		{
			text: 'Information',
			handler: props.actionProvider.handleinfoBox,
			id: 1,
		},
		{
			text: 'Github',
			handler: props.actionProvider.githubOptions,
			id: 2,
		},
		{
			text: 'Portfolio',
			handler: props.actionProvider.portfolioOptions,
			id: 3,
		},
	];

	const buttonsMarkup = mainOptions.map((option) => (
		<button
			key={option.id}
			onClick={option.handler}
			className='mainOptions-button'>
			{option.text}
		</button>
	));

	return (
		<div className='mainOptions-container'>
			{buttonsMarkup}
		</div>
	);
};

export default MainOptions;
