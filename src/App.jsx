import React, { useState, useEffect } from 'react';
import CardList from './components/CardList.jsx';
import Pagination from './components/Pagination.jsx';
import { getUsers, getUserDetail } from './github/index';
import UserDetail from './components/UserDetail.jsx';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	background-color: #b6ffdf;
	color: black;
	padding: 25px;
	position: relative;
	top: 1px;
	margin-top: 0px;
	border-radius: 25px;
`;

const ContentContainer = styled.div`
	padding: 15px;
`;

const Loading = styled.div`
	font-size: 16px;
	margin: 30px 0;
`;

 function App() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [userDetail, setUserDetail] = useState({});

	useEffect(() => {
		getUsers(30 * page - 30, 30, setIsLoading, setUsers);
	}, [page]);

	const handlePageClick = (page) => {
		setPage(page);
	};

	const handleUserClick = (username) => {
		getUserDetail({ username, setShowModal, setUserDetail });
	};

	return (
		<div id="App">
			<Title className="title">Github Users List</Title>
			<ContentContainer className="content_container">
				{isLoading ? (
					<Loading className="loading">Loading...</Loading>
				) : (
					<Pagination
						totalPages={20}
						handleClick={handlePageClick}
						page={page}
					/>
				)}
				<CardList list={users} handleUserClick={handleUserClick} />
				{showModal ? (
					<UserDetail
						handleClose={() => {
							setShowModal(false);
						}}
						{...userDetail}
					/>
				) : null}
			</ContentContainer>
		</div>
	);
}

export default App;
