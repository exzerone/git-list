import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
	border: 1px solid black;
	height: 350px;
	width: 300px;
	margin: 5px;
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

function Card({user}){
	return (
		<UserCard className="user_card">
			<UserTitle className="user_title">username: {user.login}</UserTitle>
			<UserDesc className="user_description">
				<img alt="avatar" src={user.avatar_url} style={{height: '175px', width: '225px'}}/>
				<div>
					<div>Github Url: {user.html_url}</div>
					<div>Site Admin: {user.site_admin ? 'Yes': 'No'} </div>
				</div>
			</UserDesc>
		</UserCard>
	);
}

export default Card;

