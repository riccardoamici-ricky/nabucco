import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';
import Form from './Form';
import Map from './Map';

const Section = styled.section`
	width: 60%;
	height: 100%;
	padding: 2rem 0rem;
	background-color: #fff;
	margin: auto;
	text-align: justify;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
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
		max-height: 50vh;

		@media screen and (max-width: 768px) {
			width: 100%;
			height: 90%;
		}
	}
`;

const PagesBody = ({ image, source, secondImage, double, form, map, nabucco }) => {
	const { t } = useTranslation();

	return (
		<Section>
			{i18next.t(source, { returnObjects: true }).map((data) => (
				<Container key={t(data.id)}>
					<h1>{t(data.heading)}</h1>
					<p>{t(data.paragraphOne)}</p>
					{map ? <a href="tel:+39063610097">{t(data.tel)}</a> : null}
					{map ? <Map /> : null}
					{map ? <h1>{t(data.form)}</h1> : null}
					{form ? <Form nabucco={map ? true : false} /> : null}
					<img src={image ? image : null} alt={t(data.altImg ? data.altImg : null)} />
					<p>{t(data.paragraphTwo ? data.paragraphTwo : null)}</p>
					{secondImage ? <img src={secondImage} alt={t(data.altSecondImg)} /> : null}
					{double ? <h1 style={{ marginTop: 50 }}>{t(data.secondHeading)}</h1> : null}
					{double ? <p>{t(data.secondParagraphOne)}</p> : null}
				</Container>
			))}
		</Section>
	);
};

export default PagesBody;
