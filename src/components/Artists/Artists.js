import React from 'react';
import styled from 'styled-components';
import { MediumHeadline } from '../../assets/styles/SharedStyledComponents/SharedStyledComponents';
import SearchBar from './SearchBar/SearchBar';
import Artist from './Artist/Artist';
import { artistArray } from '../../artistArray';
import { v4 as uuidv4 } from 'uuid';

const ArtistHeaderHolder = styled.div`
	padding-left: 1.5rem;
`;

const ArtistsGridContainer = styled.div`
	margin: 2rem 0;
	padding: 0.8rem 0.5rem;
	display: grid;
	grid-gap: 1rem;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 170px);
`;

const Artists = (props) => {
	return (
		<div>
			<ArtistHeaderHolder>
				<MediumHeadline>Artyści</MediumHeadline>
			</ArtistHeaderHolder>
			<SearchBar />

			<ArtistsGridContainer>
				{artistArray.map((artist) => (
					<Artist
						click={() => props.handleArtistChange(artist.name)}
						key={artist.id}
						name={artist.name}
						src={artist.iamgeURL}
					/>
				))}
			</ArtistsGridContainer>
		</div>
	);
};

export default Artists;
