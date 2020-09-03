import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
	z-index: 98;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
	z-index: 99;
	position: relative;
	width: 100%;
	max-width: 320px;
	max-height: 100%;
	margin: 0 auto;
`;

const Body = styled.div`
	padding: 20px 24px;
	border-radius: 4px;
	background-color: #e3dbdb;
	border-radius: 25px;
`;

const CloseButton = styled.button`
	cursor: pointer;
	position: absolute;
	right: 20px;
	padding: 5px;
	border: 0;
	height: 30px;
	width: 30px;
	background: none;
	font-size: 15px;
	-webkit-appearance: none;
`;

function UserDetail({ handleClose, ...userData }) {
	return (
		<Overlay className="overlay" onClick={handleClose}>
			<Modal className="modal" onClick={(e) => e.stopPropagation()}>
				<Body className="modal_body">
					<div className="modal_header">
						<img
							href="user image"
							style={{ height: '150px', width: '150px', borderRadius: '25px' }}
							src={userData.avatar_url}
						/>
						<CloseButton onClick={handleClose} className="close_button">X</CloseButton>
					</div>
					<h3>{`Name: ${userData.name}`}</h3>
					<div>{`Username: ${userData.login}`}</div>
					<div>{`Company: ${userData.company}`}</div>
					<div>{`Location: ${userData.location}`}</div>
					<div>{`Type: ${userData.type}`}</div>
					<div>{`Site Admin: ${userData.site_admin}`}</div>
					<div>{`Public Repoistories: ${userData.public_repos}`}</div>
					<div>{`Bio: ${userData.bio}`}</div>
				</Body>
			</Modal>
		</Overlay>
	);
}

export default UserDetail;
