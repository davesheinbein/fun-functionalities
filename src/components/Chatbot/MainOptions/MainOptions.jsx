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
			text: 'Portfolio',
			handler: props.actionProvider.portfolioOptions,
			id: 2,
		},
		{
			text: 'Github',
			handler: props.actionProvider.githubOptions,
			id: 3,
		},
		{
			text: 'Linkedin',
			handler: props.actionProvider.linkedinOptions,
			id: 4,
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
