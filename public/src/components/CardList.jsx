import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

function CardList(props){
	return (
		<div>
			{
				props.list.map((user) => (
					<Card key={user.id} user={user}/>
				))
			}
		</div>
	)
}

export default CardList;