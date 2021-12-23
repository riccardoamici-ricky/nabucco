import React from 'react';
import styled from 'styled-components';

const CatButContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-auto-flow: row;
	grid-gap: 1vh;
	margin-bottom: 1em;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const CatButton = styled.div`
	width: 100%;
	height: 100%;
	padding: 1rem 0rem;
	background-color: #000;
	cursor: pointer;
	font-family: 'DM Serif Display', serif;
	text-transform: uppercase;
	text-align: center;
	color: #fff;

	&:hover {
		transform: translateY(-2px);
		background-color: #214448;
	}
`;

const Categories = ({ categories, filterItems, activeCategory }) => {
	return (
		<CatButContainer>
			{categories.map((category, index) => {
				return (
					<CatButton
						type="button"
						className={`${activeCategory === category ? 'filter-btn active' : 'filter-btn'}`}
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</CatButton>
				);
			})}
		</CatButContainer>
	);
};

export default Categories;
