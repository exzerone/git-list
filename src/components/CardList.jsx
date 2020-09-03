import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	max-width: 1500px;
	flex-wrap: wrap;
	align-self: center;
`;

function CardList({ list, handleUserClick }) {
	return (
		<Container className="user_container">
			{list.map((user) => (
				<Card
					handleClick={() => {
						handleUserClick(user.login);
					}}
					key={user.id}
					user={user}
				/>
			))}
		</Container>
	);
}

export default CardList;
