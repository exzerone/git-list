import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardList from './components/CardList.jsx';
import Pagination from './components/Pagination.jsx';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	background-color: black;
	color: white;
	padding: 25px;
	position: relative;
	top: 1px;
	margin-top: 0px;
`;

const ContentContainer = styled.div`
	padding: 15px;
`;

const Loading = styled.div`
	font-size: 16px;
	margin: 30px 0;
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
		<div id="App">
			<Title className="title">Github Users List</Title>
			<ContentContainer className="content_container">
				<h2>Number Of Users Per Page: {users.length}</h2>
				{isLoading ? (
					<Loading className="loading">Loading...</Loading>
				) : (
					<Pagination totalPages={20} handleClick={handleClick} page={page} />
				)}
				<CardList list={users} />
			</ContentContainer>
		</div>
	);
}

export default App;
