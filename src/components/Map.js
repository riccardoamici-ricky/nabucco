import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 5vh 0;
	height: 100%;
	width: 100%;
`;

const Map = () => {
	return (
		<Container>
			<iframe
				title="Nabucco"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5451985213504!2d12.462682583139086!3d41.924134723492045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60ec7ae9b0a1%3A0x95c355a88233139a!2sLungotevere%20Flaminio%2C%2057%2C%2000196%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sde!4v1638795721388!5m2!1sen!2sde"
				width="100%"
				height="450"
				loading="lazy"
			/>
		</Container>
	);
};

export default Map;
