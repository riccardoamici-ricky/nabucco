import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Section = styled.section`
	background: #000;
	color: #fff;
	width: 100%;
	min-height: 600px;
	padding: 3rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
`;
const FooterTop = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4rem 0rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
const Quote = styled.div`
	flex: 1;
	padding: 2rem 0rem;

	h3 {
		font-size: clamp(2rem, 8vw, 5rem);

		@media screen and (max-width: 768px) {
			text-align: center;
		}
	}
`;
const FooterInfo = styled.div`
	padding: 2rem;
	line-height: 3;
	display: flex;
	flex-direction: column;

	a {
		color: #fff;
		text-decoration: none;
	}
	@media screen and (max-width: 768px) {
		align-items: baseline;
	}
`;
const FooterBottom = styled.div`
	display: flex;
	padding: 2rem 0rem;

	@media screen and (max-width: 768px) {
		display: unset;
	}
`;
const SocialIcons = styled.div`
	display: flex;
	width: 50%;

	@media screen and (max-width: 768px) {
		margin-bottom: 2rem;
		width: 100%;
		justify-content: center;
	}
`;
const Instagram = styled(FaInstagram)`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #fff;

	@media screen and (max-width: 768px) {
		margin: 0 10px;
	
	}
`;
const Facebook = styled(FaFacebookF)`
font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #fff;

	@media screen and (max-width: 768px) {
		margin: 0 10px;
	
	}
`;
const Contact = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 2rem;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: center;
		padding-right: 0px;
	}
`;

const MobileLinks = styled.span`
	display: flex;
	flex-direction: unset;

	@media screen and (max-width: 768px) {
		display: flex;
		margin: auto;
	}
`;

const Footer = () => {
	return (
		<Section>
			<Container>
				<FooterTop>
					<Quote>
						<h3>
							This is<br /> Tanagra
						</h3>
					</Quote>
					<MobileLinks>
						<FooterInfo>
							<Link to="/menu">Menù</Link>
							<Link to="/filosofia">Filosofia</Link>
							<Link to="/eventi">Eventi</Link>
						</FooterInfo>
						<FooterInfo>
							<Link to="/">Cookies</Link>
							<Link to="/">Privacy</Link>
							<Link to="/contatti">Contatti</Link>
						</FooterInfo>
					</MobileLinks>
				</FooterTop>
				<FooterBottom>
					<SocialIcons>
						<a href="//www.instagram.com/tanagra_ristorante/" rel="noopener noreferrer" target="_blank">
							<Instagram />
						</a>
						<a href="//www.google.com" rel="noopener noreferrer" target="_blank">
							<Facebook />
						</a>
					</SocialIcons>
					<Contact>
						<Button to="/contatti">
							Prenota <IoMdArrowRoundForward />
						</Button>
					</Contact>
				</FooterBottom>
			</Container>
		</Section>
	);
};

export default Footer;
