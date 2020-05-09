import React from 'react';
import styled from 'styled-components';
import { ReactComponent as YtIcon } from '../../../assets/icon/youtube.svg';
import rapgeniusImage from '../../../assets/images/rapgenius.png';

const Header = styled.header`
	padding: 0 0 0 1rem;
	margin-top: 1rem;
`;

const ArtistHeadline = styled.span`
	padding: 0 0 0 1.5rem;
	padding: 0.9rem 1rem;
	background-color: rgba(209, 234, 78, 0.25);
	font-size: 2rem;
	display: inline-block;
	font-weight: bold;
`;

const SmallHeadline = styled.p`
	padding: 0 0 0 1.5rem;
	font-size: 1.6rem;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 1.5rem;
		bottom: -0.3rem;
		height: 2px;
		width: 39px;
		background-color: black;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0 0 0 1.5rem;
`;

const Link = styled.a`
	display: inline-block;
	height: 3rem;
	width: 3rem;
	text-decoration: none;
	text-transform: uppercase;
	& svg {
		width: 100%;
		height: 100%;
	}
`;

const LinkRound = styled.a`
	margin-left: 2.5rem;
	color: black;
	font-weight: bold;
	display: flex;
	align-items: center;
	border-radius: 10px;
	height: 3rem;
	padding: 0.5rem 1rem;
	overflow: hidden;
	text-transform: uppercase;
	text-decoration: none;
	background-color: rgb(246, 240, 104);
	& img {
		margin-left: 1rem;
		height: 100%;
		transform: rotate(0);
		transition: transform 0.5s;
	}
	&:hover img {
		transform: rotate(360deg);
	}
`;

const NominatedContainer = styled.div`
	display: flex;

	align-items: center;
	flex-wrap: wrap;
`;

const Nominated = styled.span`
	background-color: rgb(55, 60, 63);
	color: white;
	font-size: 1.4rem;
	padding: 0.6rem 1rem;
	margin: 0.5rem 1rem;
	border-radius: 5px;
`;

const ArtistInfo = ({
	artist: { name, youtube, nominated, rapgenius },
	findArtist,
}) => {
	const rapgeniusLink = rapgenius && (
		<LinkRound target="blank" href={rapgenius}>
			Rapgenius
			<img alt="rapgenius" src={rapgeniusImage} />
		</LinkRound>
	);

	return (
		<div>
			<Header>
				<ArtistHeadline>{name}</ArtistHeadline>
			</Header>
			<section>
				<SmallHeadline>Linki:</SmallHeadline>

				<LinkContainer>
					<Link target="blank" href={youtube}>
						<YtIcon className="YT" />
					</Link>
					{rapgeniusLink}
				</LinkContainer>
			</section>
			<section>
				<SmallHeadline>Nominowani:</SmallHeadline>
				<NominatedContainer>
					{nominated.map((nominatedArtist, index) => (
						<Nominated onClick={() => findArtist(nominatedArtist)} key={index}>
							{nominatedArtist}
						</Nominated>
					))}
				</NominatedContainer>
			</section>
		</div>
	);
};

export default ArtistInfo;
