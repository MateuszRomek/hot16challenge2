import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
	background: rgba(209, 234, 78, 0.25);
	padding: 1rem 1.5rem 0.5rem;
`;

const HeaderTitle = styled.h1`
	margin: 5px 0;
	position: relative;
	padding: 4px;
`;

const Header = () => {
	return (
		<HeaderBar>
			<HeaderTitle>#hot16challange2</HeaderTitle>
		</HeaderBar>
	);
};

export default Header;
