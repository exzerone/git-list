import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	max-width: 1500px;
	flex-wrap: wrap;
	align-self: center;
`;

function CardList({list}){
	return (
		<Container className="user_container">
			{
				list.map((user) => (
					<Card key={user.id} user={user}/>
				))
			}
		</Container>
	)
}

export default CardList;