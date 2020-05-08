import React from 'react';
import styled from 'styled-components';

const Fixed = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(32, 32, 3, 0.3);
	z-index: 10;
`;

const Backdrop = ({ children }) => {
	return <Fixed className="backdrop">{children}</Fixed>;
};

export default Backdrop;
