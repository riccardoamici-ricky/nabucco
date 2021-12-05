import React from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import i18next from 'i18next';
import { MdLanguage } from 'react-icons/md';
import ItalyFlag from '../images/italy.svg';
import UkFlag from '../images/uk.svg';

const Dropdown = styled.div`
	position: relative;

	@media screen and (max-width: 768px) {
		max-width: 10%;
		margin: auto;
		padding-top: 2rem;
	}
`;

const DropdownBtn = styled.div`
	padding: 5px 8px;
	background: transparent;
	box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
	font-weight: bold;
	display: flex;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
`;

const SelectIcon = styled(FaCaretDown)`
    color: #fff;

`;

const LangIcon = styled(MdLanguage)`
color: #fff;

`;

const DropdownContent = styled.div`
	position: relative;
	left: 0;
	padding: 10px;
	background: rgba(0, 0, 0, 0.5);
	opacity: 1;
	box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
	font-weight: 500;
	color: #333;
	width: 100%;
	display: ${({ isOpenLang }) => (isOpenLang ? 'block' : 'none')};
`;
const DropdownItem = styled.div`
	padding: 5px;
	cursor: pointer;
	transition: all 0.2s;
	text-align: center;

	&:hover {
		background: #000;
	}
`;

const Image = styled.img`
	height: 2vh;
	width: 2.5vh;
`;

const ChooseLanguage = ({ isOpenLang, toggleLang }) => {
	const options = [
		{
			code: 'en',
			flag: UkFlag
		},
		{
			code: 'it',
			flag: ItalyFlag
		}
	];

	return (
		<Dropdown onClick={toggleLang}>
			<DropdownBtn onClick={toggleLang}>
				<LangIcon /> <SelectIcon />
			</DropdownBtn>

			<DropdownContent isOpenLang={isOpenLang}>
				{options.map(({ code, name, country_code, flag }) => (
					<DropdownItem key={code}
						onClick={() => {
							i18next.changeLanguage(code);
						}}
					>
						<Image src={flag} />
					</DropdownItem>
				))}
			</DropdownContent>
		</Dropdown>
	);
};

export default ChooseLanguage;
