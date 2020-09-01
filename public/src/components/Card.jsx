import React from 'react';

function Card(props){
	const { user } = props;

	return (
		<div className="user_card">
			<img alt="avatar" src={user.avatar_url} style={{height: '150px', width: '150px'}}/>
			<div>
				<h3>User: {user.login}</h3>
				<div>Site Admin: {user['site_admin'] ? 'Yes': 'No'} </div>
			</div>
		</div>
	);
}

export default Card;

