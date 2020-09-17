import React, { useState, useEffect } from 'react';
import './styles/Card.css';

const FlashCard = ({
	information,
	result,
	incrementIndex,
}) => {
	const [showResult, setShowresult] = useState(false);

	useEffect(() => setShowresult(false), [information]);

	return (
		<div className='card'>
			<div className='card-container'>
				{!showResult && information}
				{showResult && result}
				<button
					onClick={() => setShowresult(!showResult)}
					className='card-button'>
					Swap
				</button>
			</div>
			{showResult && (
				<>
					<button
						onClick={incrementIndex}
						className='card-button'>
						Next
					</button>
				</>
			)}
		</div>
	);
};
export default FlashCard;
