import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';
import ArtistInfo from './ArtistInfo/ArtistInfo';
import Backdrop from '../UI/Backdrop/Backdrop';

const ModalContainer = styled.div`
	position: relative;
	width: 100%;
	background-color: white;
	height: auto;
	padding-bottom: 1.4rem;

	@media (min-width: 1281px) {
		max-width: 940px;
		border-radius: 10px;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		max-width: 840px;
		border-radius: 10px;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	right: 0.5rem;
	top: -4rem;
	border: none;
	background-color: white;
	height: 3.5rem;
	width: 3.5rem;
	& svg {
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	@media (min-width: 1281px) {
		top: 0rem;
		right: -5rem;
	}
`;

const Video = styled.div`
	width: 100%;
	height: 21.1rem;
	overflow: hidden;
	& iframe {
		width: 100%;
		height: 100%;
	}
	@media (min-width: 1281px) {
		height: 520px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		height: 340px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
`;
const Modal = ({ artist, onClose }) => {
	return (
		<Backdrop>
			<ModalContainer>
				<CloseButton className="closeBtn">
					<CloseIcon />
				</CloseButton>
				<Video dangerouslySetInnerHTML={{ __html: artist.iframe }}></Video>
				<ArtistInfo artist={artist} />
			</ModalContainer>
		</Backdrop>
	);
};

export default Modal;
