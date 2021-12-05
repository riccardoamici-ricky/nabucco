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
`;
const FooterBottom = styled.div`
	display: flex;
	padding: 2rem 0rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
const SocialIcons = styled.div`
	display: flex;
	width: 50%;

	@media screen and (max-width: 768px) {
		margin-bottom: 2rem;
		width: 100%;
	}
`;
const Instagram = styled(FaInstagram)`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #fff;
`;
const Facebook = styled(FaFacebookF)`
font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #fff;
`;
const Contact = styled.div`

    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
	padding-right: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

const Footer = () => {
	return (
		<Section>
			<Container>
				<FooterTop>
					<Quote>
						<h3>
							This is<br /> Nabucco
						</h3>
					</Quote>
					<FooterInfo>
						<h4>Link veloci</h4>
						<Link to="/homes">Menù</Link>
						<Link to="/homes">Filosofia</Link>
						<Link to="/homes">Regala una cena</Link>
					</FooterInfo>
					<FooterInfo>
						<h4>Legal</h4>
						<Link to="/homes">Cookie Policy</Link>
						<Link to="/homes">Privacy Policy</Link>
						<Link to="/homes">Contatti</Link>
					</FooterInfo>
				</FooterTop>
				<FooterBottom>
					<SocialIcons>
						<a href="//www.google.com" rel="noopener noreferrer" target="_blank">
							<Instagram />
						</a>
						<a href="//www.google.com" rel="noopener noreferrer" target="_blank">
							<Facebook />
						</a>
					</SocialIcons>
					<Contact>
						<Button to="/homes/" >
							Prenota <IoMdArrowRoundForward />
						</Button>
					</Contact>
				</FooterBottom>
			</Container>
		</Section>
	);
};

export default Footer;
