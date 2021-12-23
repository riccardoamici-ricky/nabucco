import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import Categories from './Menu/Categories';
import { useTranslation } from 'react-i18next';
import { default as i18next } from 'i18next';

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

const Heading = styled.div``;

const Container = styled.div`
	padding: 3rem calc((100vw - 1300px) / 2);

	h1 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
		color: #214448;
		font-family: 'Cormorant Garamond', serif;
        width: 70%;
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

const PagesMenu = ({ source }) => {
	const { t } = useTranslation();

	const restaurantMenu = i18next.t('menu', { returnObjects: true });
	const newCat = i18next.t('menuCategories', { returnObjects: true }).map((item) => item.title);

	const [ menuItems, setMenuItems ] = useState(restaurantMenu);
	const [ activeCategory, setActiveCategory ] = useState('');

	const filterItems = (category) => {
		setActiveCategory(category);
		if (category === 'tutto') {
			setMenuItems(restaurantMenu);
			return;
		}
		const newItems = restaurantMenu.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<Section>
			<Container>
				{i18next.t(source, { returnObjects: true }).map((data) => (
					<Heading key={t(data.id)}>
						<h1>{t(data.heading)}</h1>
						<p>{t(data.paragraphOne)}</p>
					</Heading>
				))}
				<Categories categories={newCat} activeCategory={activeCategory} filterItems={filterItems} />
				<Menu items={menuItems} />
			</Container>
		</Section>
	);
};

export default PagesMenu;
