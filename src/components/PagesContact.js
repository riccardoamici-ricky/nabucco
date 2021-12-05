import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';
import Form from './Form';

const Section = styled.section`
	width: 60%;
	height: 100%;
	padding: 2rem 0rem;
	background-color: #fff;
	margin: auto;
	text-align: justify;
`;
const Container = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);

	h1 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
		color: #214448;
        font-family: 'Cormorant Garamond', serif;
	}

	p {
		line-height: 2;
		margin: 2rem 0rem;
	}

	img {
		width: 100%;
		height: 70%;
		object-fit: cover;

		@media screen and (max-width: 768px) {
			width: 90%;
			height: 90%;
		}
	}
`;

const PagesContact = ({ image }) => {
	const { t } = useTranslation();

	return (
		<Section>
			{i18next.t('aboutPage', { returnObjects: true }).map((data) => (
				<Container>
					<h1>{t(data.heading)}</h1>
					<p>{t(data.paragraphOne)}</p>
					<img src={image} alt="ho" />
					<p>{t(data.paragraphTwo)}</p>
                    <Form />
				</Container>
			))}
		</Section>
	);
};

export default PagesContact;