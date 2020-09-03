import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
	height: 250px;
	width: 175px;
	margin: 5px;
	cursor: pointer;
	border-radius: 25px;
	background-color: #c7ded6;
`;

const UserTitle = styled.h3`
	margin: 15px;
`;

const UserDesc = styled.div`
	padding: 10px;
`;

function Card({ user, handleClick }) {
	return (
		<UserCard className="user_card" onClick={handleClick}>
			<UserTitle className="user_title">{user.login}</UserTitle>
			<UserDesc className="user_description">
				<img
					alt="avatar"
					src={user.avatar_url}
					style={{ height: '150px', width: '150px', borderRadius: "15px" }}
				/>
			</UserDesc>
		</UserCard>
	);
}

export default Card;
