import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Artists from './components/Artists/Artists';
import ExpandMessage from './components/ExpandMessage/ExpandMessage';
import Modal from './components/Modal/Modal';
import { artistArray } from './artistArray';
import OfficialSite from './components/OfficialSite/OfficialSite';
import Footer from './components/Footer/Footer';

const DesktopGrid = styled.div`
	@media (min-width: 1281px) {
		display: grid;
		grid-template-columns: 1fr 400px;
		grid-template-rows: auto 1fr;
	}
`;

function App() {
	const [isModalOpen, setModal] = useState(false);
	const [currentArtist, setCurrentArtist] = useState({});
	const OpenModal = () => setModal(true);

	const CloseModal = (e) => {
		const targetClassName = e.target.className;
		if (typeof targetClassName !== 'string') return;
		if (
			targetClassName.includes('closeBtn') ||
			targetClassName.includes('backdrop')
		) {
			setModal(false);
		} else return;
	};

	const FindArtist = (name) => {
		const artistIndex = artistArray.findIndex(
			(a) => a.name.toLowerCase() === name.toLowerCase()
		);
		if (artistIndex === -1) return false;
		const artistObj = { ...artistArray[artistIndex] };
		setCurrentArtist({ ...artistObj });
	};

	const HandleArtistClick = useCallback((artist) => {
		FindArtist(artist);
		OpenModal();
	}, []);

	return (
		<div onClick={CloseModal} className="App">
			<MainTemplate>
				{isModalOpen && (
					<Modal findArtist={FindArtist} artist={currentArtist} />
				)}
				<Header />
				<OfficialSite />
				<DesktopGrid>
					<Banner />
					<ExpandMessage />

					<Artists
						artistArray={artistArray}
						handleArtistChange={HandleArtistClick}
					/>
				</DesktopGrid>
				<Footer />
			</MainTemplate>
		</div>
	);
}

export default App;
