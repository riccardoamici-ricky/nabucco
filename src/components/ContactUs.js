import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/mappa.png';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';

const Section = styled.section`
	background: #214448;
	padding: 12rem 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Container = styled.div`
	background: #fff;
	padding: 3rem 2rem;
	position: relative;
`;
const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;
const ColumnLeft = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0px -15px;
	justify-content: flex-start;
	padding: 1rem;
`;
const Content = styled.div`
	flex: 0 0 50%;
	@media screen and (max-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-top: 250px;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 2rem;
		color: #000;
		font-family: 'Cormorant Garamond', serif;
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.5;
	}
`;
const ColumnRight = styled.div`
	position: absolute;
	top: -80px;
	right: 0;
	max-width: 850px;
	height: 140%;
	width: 45%;
	padding-left: 1rem;

	@media screen and (max-width: 768px) {
		height: 320px;
		top: -65px;
		width: 80%;
		margin: 0 auto;
		left: 0;
	}
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const ContactUs = () => {
	const { t } = useTranslation();

	return (
		<Section>
			<Container>
				<Wrap>
					<ColumnLeft>
						{i18next.t('contactUsHome', { returnObjects: true }).map((data) => (
							<Content
								key={t(data.id)}
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="200"
							>
								<h1>{t(data.title)}</h1>
								<p>{t(data.subtitle)}</p>
								<Button to="/homes" primary="true">
									{t(data.label)}
								</Button>
							</Content>
						))}
					</ColumnLeft>
					<ColumnRight data-aos="fade-left" data-aos-duration="1000">
						<Image src={ImageOne} />
					</ColumnRight>
				</Wrap>
			</Container>
		</Section>
	);
};

export default ContactUs;
