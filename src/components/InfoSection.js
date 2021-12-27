import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';

const Section = styled.section`
	width: 100%;
	height: 100%;
	// padding: 4rem 0rem;
	background-color: #fff;
`;

const Container = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 800px;
	margin-top: -170px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 400px;
	}
`;

const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	line-height: 1.4;
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? '2' : '1')};

	h1 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
		color: #214448;
		font-family: 'Cormorant Garamond', serif;
	}

	p {
		margin-bottom: 2rem;
	}
`;
const ColumnRight = styled.div`
	display: flex;
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? '1' : '2')};
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		order: ${({ reverse }) => (reverse ? '2' : '1')};
	}

	img {
		width: 100%;
		height: 70%;
		object-fit: cover;

		@media screen and (max-width: 768px) {
			width: 100%;
			height: 90%;
		}
	}
`;

const InfoSection = ({ image, reverse, source }) => {
	const { t } = useTranslation();

	return (
		<Section>
			<Container>
				{i18next.t(source, { returnObjects: true }).map((data) => (
					<ColumnLeft
						reverse={reverse}
						key={t(data.id)}
						data-aos={reverse ? 'fade-left' : 'fade-right'}
						data-aos-duration="1200"
						data-aos-delay="300"
					>
						<h1>{t(data.title)}</h1>
						<p>{t(data.subtitle)}</p>
						<p>{t(data.second_subtitle)}</p>
						<Button to={t(data.path)} primary="true" target={data.id === 5 ? '_blank' : ''}>
							{t(data.label)}
						</Button>
					</ColumnLeft>
				))}
				<ColumnRight
					reverse={reverse}
					data-aos={reverse ? 'fade-right' : 'fade-left'}
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<img src={image} alt="ho" />
				</ColumnRight>
			</Container>
		</Section>
	);
};

export default InfoSection;
