import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
	border: 1px solid black;
	height: 300px;
	width: 250px;
	margin: 5px;
	cursor: pointer;
`;

const UserTitle = styled.h3`
	max-width: 300px;
	height: 50px;
	background-color: lightgray;
	margin: 0;
	padding: 10px;
`;

const UserDesc = styled.div`
	padding: 10px;
`;

function Card({ user, handleClick }) {
	return (
		<UserCard className="user_card" onClick={handleClick}>
			<UserTitle className="user_title">User: {user.login}</UserTitle>
			<UserDesc className="user_description">
				<img
					alt="avatar"
					src={user.avatar_url}
					style={{ height: '175px', width: '225px' }}
				/>
			</UserDesc>
		</UserCard>
	);
}

export default Card;
