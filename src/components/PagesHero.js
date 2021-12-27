import React from 'react';
import styled from 'styled-components/macro';

const HeroSection = styled.section`
	height: 60vh;
	max-height: 2200px;
	position: relative;
	overflow: hidden;
`;

const HeroSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	&::before {
		content: '';
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100vh;
		bottom: 0vh;
		left: 0;
		overflow: hidden;
		opacity: 0.4;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
	}
`;

const HeroImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`;


const PagesHero = ({ image, heading }) => {
	return (
		<HeroSection>
			<HeroSlider>
				<HeroImage src={image} alt="" />
				
			</HeroSlider>
		</HeroSection>
	);
};

export default PagesHero;
