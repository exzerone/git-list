import Axios from 'axios';

const apiSrc = 'https://api.github.com';

export const getUsers = (since=0, per_page=30, setLoading, setUsers) => {
	setLoading(true)
	Axios.get(`${apiSrc}/users`,{
		params:{ since, per_page }
	})
	.then((response)=>{
		const users = response.data;
		setUsers(users)
		setLoading(false)
	})
	.catch((err)=>{
		console.log(err);
	})
}

export const getUserDetail = ({username, setShowModal, setUserDetail}) => {
	Axios.get(`${apiSrc}/users/${username}`)
	.then((response) => {
		setShowModal(true);
		setUserDetail(response.data)
	})
	.catch((err) => {
		console.log(err)
	})
}