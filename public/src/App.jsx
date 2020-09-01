import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardList from './components/CardList.jsx'


function App() {
	let [users, setUsers] = useState([]);

	useEffect(()=> {
		Axios.get('https://api.github.com/users', {
			params: {
				since: 0
			}
		})
		.then(data => {
			if (data) {
				setUsers(data.data);
			}
		})
		.catch(error => console.log(error))
	}, [])

	return (
		<div>
			<h1 className="title">
					Github Users
			</h1>
			<CardList list={users}/>
		</div>
	)
}

export default App;
