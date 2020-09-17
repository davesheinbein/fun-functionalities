import React from 'react';
import './styles/GithubOptions.css';

const GithubOptions = (props) => {
	const githubOptions = [
		{
			text: 'David Sheinbein',
			handler: props.actionProvider.githubDavidSheinbein,
			id: 1,
		},
		{
			text: 'Jason Hur',
			handler: props.actionProvider.githubJasonHur,
			id: 2,
		},
	];

	const buttonsMarkup = githubOptions.map((option) => (
		<button
			key={option.id}
			onClick={option.handler}
			className='github-option-button'>
			{option.text}
		</button>
	));

	return (
		<div className='github-options-container'>
			{buttonsMarkup}
		</div>
	);
};

export default GithubOptions;
