import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../../assets/styles/GlobalStyle';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

const MainTemplate = ({ children }) => (
	<>
		<GlobalStyle />
		<FlexContainer>{children}</FlexContainer>
	</>
);

export default MainTemplate;
