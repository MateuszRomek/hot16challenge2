import React from 'react';
import styled from 'styled-components';

const ArtistContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 16rem;
	border-radius: 15px;
	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.12);
	}
`;

const ArtistImageHolder = styled.div`
	width: 10rem;
	height: 10rem;
	overflow: hidden;
	border-radius: 50%;
`;

const ArtistImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ArtistName = styled.p`
	font-weight: bold;
	font-size: 1.5rem;
	margin: 0.4rem 0;
	background-color: rgba(209, 234, 78, 0.25);
	color: rgb(55, 60, 63);
	padding: 0.4rem 0.5rem;
`;

const Artist = (props) => {
	return (
		<ArtistContainer onClick={props.click}>
			<ArtistImageHolder>
				<ArtistImage alt="Artist photo" src={props.src} />
			</ArtistImageHolder>
			<ArtistName>{props.name}</ArtistName>
		</ArtistContainer>
	);
};

export default Artist;
