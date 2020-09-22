import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './style/Loader.css';

function Loader() {
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../loader.json'),
		});
	}, []);

	return <div className='loading' ref={container}></div>;
}

export default Loader;
