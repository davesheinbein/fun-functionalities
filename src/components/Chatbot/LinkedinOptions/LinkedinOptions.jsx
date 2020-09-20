import React from 'react';
import './styles/LinkedinOptions.css';

const LinkedinOptions = (props) => {
	const linkedinOptions = [
		{
			text: 'David Sheinbein',
			handler: props.actionProvider.linkedinDavidSheinbein,
			id: 1,
		},
		{
			text: 'Jason Hur',
			handler: props.actionProvider.linkedinJasonHur,
			id: 2,
		},
	];

	const buttonsMarkup = linkedinOptions.map((option) => (
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

export default LinkedinOptions;
