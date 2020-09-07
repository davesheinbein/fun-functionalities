import React from 'react';
import Mouse from '../../../../components/Mouse/Mouse';
import './style/BoxFifteen.css';

function BoxFifteen() {
	return (
		<div className='boxFifteenContainer'>
			<div id='textBox'>
				Mouse
				<br />
				Over
			</div>
			<Mouse />
		</div>
	);
}

export default BoxFifteen;
