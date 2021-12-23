import React from 'react';
import styled from 'styled-components';

const Container = styled.div`border: 1px solid #ddd;`;

const Body = styled.div``;

const Heading = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 0px 3em;
	margin-top: 10vh;
	h1 {
		text-transform: capitalize;
	}
`;
const Desc = styled.div`padding: 0px 3em;`;

const Menu = ({ items }) => {
	return (
		<Container>
			{items.map((item) => {
				const { id, title, desc, price } = item;
				return (
					<Body key={id}>
						<Heading>
							<h1>{title}</h1>
							<h4 className="price">{price}</h4>
						</Heading>
						<Desc>
							<p className="item-text">{desc}</p>
						</Desc>
					</Body>
				);
			})}
		</Container>
	);
};

export default Menu;
