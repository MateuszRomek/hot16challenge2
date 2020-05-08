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
	opacity: 0;
	transform: translateY(-100%);
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
	}
`;

const Video = styled.div`
	width: 100%;
	height: 21.1rem;

	& iframe {
		width: 100%;
		height: 100%;
	}
`;
const Modal = (props) => {
	return (
		<Backdrop>
			<ModalContainer>
				<CloseButton onClick={props.onClose}>
					<CloseIcon />
				</CloseButton>
				<Video>
					<iframe
						title="youtbe video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/-yOxVTcMX1k"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</Video>
				<ArtistInfo />
			</ModalContainer>
		</Backdrop>
	);
};

export default Modal;
