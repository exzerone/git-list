import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardList from './components/CardList.jsx';
import Pagination from './components/Pagination.jsx';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
`;

function App() {
	let [users, setUsers] = useState([]);
	let [page, setPage] = useState(1);
	let [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		Axios.get('https://api.github.com/users', {
			params: {
				since: 30 * page - 30,
			},
		})
		.then((response) => {
			const users = response.data;
			setUsers(users);
			setIsLoading(false);
		})
		.catch((error) => console.log(error));
	}, [page]);

	const handleClick = function (page) {
		setPage(page);
	};

	return (
		<div>
			<Title className="title">Github Users</Title>
			<h2>Number of Users per page: {users.length}</h2>
			{isLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<Pagination totalPages={20} handleClick={handleClick} page={page} />
			)}
			<CardList list={users} />
		</div>
	);
}

export default App;
