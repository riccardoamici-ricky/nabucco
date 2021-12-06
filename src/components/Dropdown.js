import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import ChooseLanguage from './ChooseLanguage';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';

const DropdownContainer = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #214448;
	display: grid;
	align-items: center;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	left: 0;
	transiton: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #000;

`;
const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 80px);
	text-align: center;
	margin-bottom: 2rem;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(5, 60px);
	}
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        font-weight: bold;
        transition: 0.2s ease-in-out;
    }
`;
const BtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const Dropdown = ({ isOpen, toggle }) => {
	const { t } = useTranslation();
	const [ isOpenLang, setIsOpenLang ] = useState(false);

	const toggleLang = () => {
		setIsOpenLang(!isOpenLang);
	};
	return (
		<DropdownContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon onClick={toggle} />
			</Icon>
			<DropdownWrapper>
				<DropdownMenu>
					{i18next.t('menuData', { returnObjects: true }).map((item) => (
						<DropdownLink to={t(item.link)} key={item.id} onClick={toggle}>
							{t(item.title)}
						</DropdownLink>
					))}
				</DropdownMenu>
				<BtnWrap>
					<Button primary="true" round="true" big="true" to="/conrtact">
						Contact us
					</Button>
				</BtnWrap>
				<ChooseLanguage isOpenLang={isOpenLang} toggleLang={toggleLang} />
			</DropdownWrapper>
		</DropdownContainer>
	);
};

export default Dropdown;
