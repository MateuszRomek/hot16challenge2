import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MediumHeadline } from '../../assets/styles/SharedStyledComponents/SharedStyledComponents';
import SearchBar from './SearchBar/SearchBar';
import Artist from './Artist/Artist';

const ArtistListContainer = styled.div`
	@media (min-width: 1281px) {
		grid-column: 1;
		grid-row: 2;
	}
`;

const ArtistHeaderHolder = styled.div`
	padding-left: 1.5rem;
`;

const ArtistsGridContainer = styled.div`
	margin: 2rem 0;
	padding: 0.8rem 0.5rem;
	display: grid;
	grid-gap: 1rem;
	justify-content: center;
	height: 400px;
	overflow: scroll;
	overflow-x: hidden;
	grid-template-columns: repeat(auto-fit, 170px);
	@media (min-width: 1281px) {
		grid-column: 1/-1;
		grid-row: 1;
		overflow: scroll;
		overflow-x: hidden;
		height: 650px;
	}
`;

const Artists = (props) => {
	const [filterWord, setFilterWord] = useState('');

	const artistsList = props.artistArray;
	const [array, setArray] = useState([]);

	useEffect(() => {
		const filterArr = artistsList.filter(
			(artist) => artist.name.toLowerCase().indexOf(filterWord) !== -1
		);
		setArray(filterArr);
	}, [filterWord, artistsList]);
	const onSearchBarChange = (e) => {
		setFilterWord(e.target.value.toLowerCase());
	};

	return (
		<ArtistListContainer className="artistsContainer">
			<ArtistHeaderHolder>
				<MediumHeadline>Artyści</MediumHeadline>
			</ArtistHeaderHolder>
			<SearchBar value={filterWord} onChange={onSearchBarChange} />

			<ArtistsGridContainer>
				{array.map((artist) => (
					<Artist
						click={() => props.handleArtistChange(artist.name)}
						key={artist.id}
						name={artist.name}
						src={artist.imageURL}
					/>
				))}
			</ArtistsGridContainer>
		</ArtistListContainer>
	);
};

export default React.memo(Artists);
