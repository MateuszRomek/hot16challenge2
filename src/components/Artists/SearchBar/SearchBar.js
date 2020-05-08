import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SearchContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	border: 2px solid rgb(55, 60, 63);
	position: relative;
	&::before {
		content: '';
		position: absolute;
		left: 3.1rem;
		top: 0;
		height: 100%;
		width: 2px;
		background-color: rgb(55, 60, 63);
	}
`;

const InconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 100%;

	& svg {
		height: 2.3rem;
		width: 2.3rem;
	}
`;

const SearchInput = styled.input`
	flex: 1;
	height: 3.5rem;
	margin-left: 1.5rem;
	border: none;
	font-size: 1.6rem;
	&:focus {
		outline: none;
	}
`;

const SearchBar = () => {
	return (
		<Container>
			<SearchContainer>
				<InconContainer>
					<SearchIcon />
				</InconContainer>
				<SearchInput placeholder="Filtruj Artystów" />
			</SearchContainer>
		</Container>
	);
};

export default SearchBar;
