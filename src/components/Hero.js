import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';

import ImageOne from '../images/carne-nabucco.jpg';
import ImageTwo from '../images/carne-fuoco.jpg';
import ImageThree from '../images/carne-gourmet.jpg';
import ImageFour from '../images/fuoco.jpg';

const HeroSection = styled.section`
	height: 100vh;
	max-height: 2200px;
	position: relative;
	overflow: hidden;
`;

const HeroWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	posiiton: relative;
`;

const HeroSlide = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
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

const HeroContent = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	width: calc(100% - 100px);
	color: #fff;

	h1 {
		font-size: clamp(4rem, 8vw, 2rem);
		font-weight: 400;
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
		text-align: left;
		margin-bottom: 0.8rem;
		@media screen and (max-width: 768px) {
			font-size: 6vh;
		}
	}

	p {
		margin-bottom: 1.2rem;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 2.5rem`;
const arrowButtons = css`
	width: 50px;
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000;
	border-radius: 50px;
	padding: 10px;
	margin-right: 1rem;
	user-select: none;
	transition: 0.3s;

	&:hover {
		background: #fff;
		transform: scale(1.05);
	}
`;

const SliderButtons = styled.div`
	position: absolute;
	bottom: 50px;
	right: 250px;
	display: flex;
	z-index: 10;
`;

const PrevArrow = styled(IoArrowBack)`

${arrowButtons}
&:hover {
	color: #000;
	transform: scale(1.05);
}
`;

const NextArrow = styled(IoArrowForward)`

${arrowButtons}
&:hover {
	color: #000;
	transform: scale(1.05);
}
`;

const Hero = () => {
	const slides = [
		{
			image: ImageOne,
			alt: 'Nabucco'
		},
		{
			image: ImageTwo,
			alt: 'Nabucco'
		},
		{
			image: ImageThree,
			alt: 'Nabucco'
		},
		{
			image: ImageFour,
			alt: 'Nabucco'
		}
	];

	const { t } = useTranslation();

	const [ current, setCurrent ] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);

	// useEffect(
	// 	() => {
	// 		const nextSlide = () => {
	// 			setCurrent((current) => (current === length - 1 ? 0 : current + 1));
	// 		};

	// 		timeout.current = setTimeout(nextSlide, 5000);

	// 		return function() {
	// 			if (timeout.current) {
	// 				clearTimeout(timeout.current);
	// 			}
	// 		};
	// 	},
	// 	[ current, length ]
	// );

	const nextSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<HeroSection>
			<HeroWrapper data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
				{slides.map((slide, index) => {
					return (
						<HeroSlide key={index}>
							{index === current && (
								<HeroSlider>
									<HeroImage src={slide.image} alt={slide.alt} />
									<HeroContent>
										{i18next.t('sliderData', { returnObjects: true }).map((slider) => {
											return (
												index === slider.id && (
													<div key={slider.id}>
														<h1 data-aos="fade-down" data-aos-duration="600">
															{t(slider.title)}
														</h1>
														<p
															data-aos="fade-down"
															data-aos-duration="600"
															data-aos-delay="200"
														>
															{t(slider.subtitle)}
														</p>
														{slider.label ? (
															<Button
																data-aos="zoom-out"
																data-aos-duration="500"
																data-aos-delay="250"
																to={t(slider.path)}
																primary="true"
															>
																{t(slider.label)}
																<Arrow />
															</Button>
														) : null}
													</div>
												)
											);
										})}
									</HeroContent>
								</HeroSlider>
							)}
						</HeroSlide>
					);
				})}

				<SliderButtons>
					<PrevArrow onClick={prevSlide} />
					<NextArrow onClick={nextSlide} />
				</SliderButtons>
			</HeroWrapper>
		</HeroSection>
	);
};

export default Hero;
