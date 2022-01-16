import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ChooseLanguage from './ChooseLanguage';
import LogoImg from '../images/logo-inline-tanagra.svg';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Image = styled.img`height: 20vh;`;

const Nav = styled.nav`
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
`;

const NavLink = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink};

	img {
		height: 50px;
	}
`;

const MenuBars = styled(FaBars)`
    display: none;
    
    
    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
        align-self: center;
        height: 20px;
        width: 20px;
    }

`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
	&:hover {
        font-weight: bold;
        transform: scale(1.05);
		background-color: #214448;
    }
`;

const SocialIcons = styled.div`
	@media screen and (max-width: 768px) {
		margin-bottom: 2rem;
		width: 100%;
		justify-content: center;
	}
`;
const Instagram = styled(FaInstagram)`
    font-size: 1em;
    margin-right: 1.5rem;
    color: #fff;
	margin-top: 5px;

`;
const Facebook = styled(FaFacebookF)`
font-size: 1em;
    margin-right: 1.5rem;
    color: #fff;

`;

const LanguageContainer = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
	const [ navbar, setNavbar ] = useState(false);
	const location = useLocation();

	const changeBackground = () => {
		if (window.pageYOffset > 60) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener('scroll', changeBackground);
		};

		watchScroll();

		return () => {
			window.removeEventListener('scroll', changeBackground);
		};
	}, []);

	let style = {
		backgroundColor: navbar || location.pathname !== '/' ? 'black' : 'transparent',
		transition: '0.4s'
	};

	const { t } = useTranslation();

	const [ isOpenLang, setIsOpenLang ] = useState(false);

	const toggleLang = () => {
		setIsOpenLang(!isOpenLang);
	};
	return (
		<Nav style={style}>
			<Logo to="/">
				<Image src={LogoImg} />
			</Logo>
			<MenuBars onClick={toggle} />
			<NavMenu>
				{i18next.t('menuData', { returnObjects: true }).map((item) => (
					<NavMenuLinks to={t(item.link)} key={item.id}>
						{t(item.title)}
					</NavMenuLinks>
				))}
			</NavMenu>
			<LanguageContainer>
				<SocialIcons>
					<a href="//www.instagram.com/tanagra_ristorante/" rel="noopener noreferrer" target="_blank">
						<Instagram />
					</a>
					<a href="//www.google.com" rel="noopener noreferrer" target="_blank">
						<Facebook />
					</a>
				</SocialIcons>
				<ChooseLanguage isOpenLang={isOpenLang} toggleLang={toggleLang} />
			</LanguageContainer>
		</Nav>
	);
};

export default Navbar;
