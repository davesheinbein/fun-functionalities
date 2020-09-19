import React, { useState } from 'react';
import Card from './Card';

import './styles/Card.css';

const Quiz = (props) => {
	// console.log(props);
	let [informationIndex, setinformationIndex] = useState(0);

	const incrementIndex = () =>
		setinformationIndex((prev) => (prev += 1));

	const currentInformation =
		props.informations[informationIndex];

	if (!currentInformation) {
		return (
			<div className='optionsAdviceContainer'>
				<p className='noInfo'>Out of Information</p>
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
			</div>
		);
	}

	return (
		<Card
			information={currentInformation.information}
			result={currentInformation.result}
			incrementIndex={incrementIndex}
		/>
	);
};

export default Quiz;
