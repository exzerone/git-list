import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	max-width: 1000px;
	flex-wrap: wrap;
	align-self: center;
`;

function CardList(props){
	return (
		<Container className="user_container">
			{
				props.list.map((user) => (
					<Card key={user.id} user={user}/>
				))
			}
		</Container>
	)
}

export default CardList;