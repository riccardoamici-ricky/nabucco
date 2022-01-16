import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';



const CarouselSection = styled.section`
	position: relative;
	overflow: hidden;
	margin-top: 10vh;
`;

const CarouselWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	posiiton: relative;
`;

const CarouselSlide = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
`;

const CarouselSlider = styled.div`
	
`;

const CarouselImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`;

const CarouselContent = styled.div`
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
margin-left: 0.5rem`;
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
	bottom: 190px;
	right: 20px;
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

const Carousel = (carouselImgs) => {
	

    const slides = carouselImgs.carouselImgs;
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
		<CarouselSection style={{ height: slides[0].alt === "Vini" ? "1000px" : "70vh" }}>
			<CarouselWrapper>
				{slides.map((slide, index) => {
					return (
						<CarouselSlide key={index}>
							{index === current && (
								<CarouselSlider>
									<CarouselImage src={slide.image} alt={slide.alt} />
									<CarouselContent>
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
									</CarouselContent>
								</CarouselSlider>
							)}
						</CarouselSlide>
					);
				})}

				<SliderButtons>
					<PrevArrow onClick={prevSlide} />
					<NextArrow onClick={nextSlide} />
				</SliderButtons>
			</CarouselWrapper>
		</CarouselSection>
	);
};

export default Carousel;
