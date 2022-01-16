import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';
import Form from './Form';
import Map from './Map';
import Carousel from './Carousel';

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

const ContainerWines = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);

	h1 {
		margin-bottom: 4rem;
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
		height: 100%;
		max-height: 3000vh;

		@media screen and (max-width: 768px) {
			width: 100%;
			height: 90%;
		}
	}
`;

const MenuPics = styled.div`

h1 {
	margin-bottom: 4rem;
	font-size: clamp(1.5rem, 6vw, 2rem);
	color: #214448;
	font-family: 'Cormorant Garamond', serif;
	text-align: center;
}
iframe{
	margin: auto;
	width: 100%;
}
	img {
		width: 100%;
		height: 100%;
		max-height: 300vh;

		@media screen and (max-width: 768px) {
			width: 100%;
			height: 90%;
		}
	}
`;

const PagesBody = ({
	image,
	source,
	secondImage,
	thirdImage,
	double,
	executive,
	form,
	map,
	nabucco,
	carouselImgs,
	menu,
	menuFirstImg,
	menuSecondImg,
	menuThirdImg,
	wines
}) => {
	const { t } = useTranslation();
	return (
		<Section>
			{i18next.t(source, { returnObjects: true }).map(
				(data) =>
					menu === true ? (
						wines === true ? 
						<ContainerWines key={t(data.id)}><MenuPics>
							<h1>{t(data.heading)}</h1>
							<iframe title="Tanagra Vini" src="https://drive.google.com/file/d/1VvfW2D53ddF-1Fa1mI0o66zwpZnu5NJj/preview" width="640" height="780" allow="autoplay"></iframe>
							</MenuPics>
						</ContainerWines> : <Container key={t(data.id)}>
							<MenuPics>
							<h1>{t(data.heading)}</h1>
								<img src={menuFirstImg} alt="Tanagra Menu" />
								<img src={menuSecondImg} alt="Tanagra Menu" />
								<img src={menuThirdImg} alt="Tanagra Menu" />
							</MenuPics>
							{carouselImgs ? <Carousel carouselImgs={carouselImgs} /> : null}
						</Container>
					) : (
						<Container key={t(data.id)}>
							<h1>{t(data.heading)}</h1>
							<p>{t(data.paragraphOne)}</p>
							{map ? (
								<p>
									<a href="tel:+39063610097">{t(data.tel)}</a>
								</p>
							) : null}
							{map ? (
								<p>
									<a href="mailto: info@tanagra.it">{t(data.mail)}</a>
								</p>
							) : null}
							{map ? <Map /> : null}
							{map ? <h1>{t(data.form)}</h1> : null}
							<img src={image ? image : null} alt={t(data.altImg ? data.altImg : null)} />
							{secondImage ? <img src={secondImage} alt={t(data.altSecondImg)} /> : null}
							{double ? <h1 style={{ marginTop: 50 }}>{t(data.headingTwo)}</h1> : null}
							{double ? <p>{t(data.paragraphTwo)}</p> : null}
							{executive ? <img src={thirdImage} alt={t(data.altSecondImg)} /> : null}
							{executive ? <h1 style={{ marginTop: 50 }}>{t(data.headingThree)}</h1> : null}
							{executive ? <p>{t(data.paragraphThree)}</p> : null}
							{form ? <Form nabucco={map ? true : false} /> : null}
							{carouselImgs ? <Carousel carouselImgs={carouselImgs} /> : null}
						</Container>
					)
			)}
		</Section>
	);
};

export default PagesBody;
