import React, { useState } from 'react';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Artists from './components/Artists/Artists';
import ExpandMessage from './components/ExpandMessage/ExpandMessage';
import Modal from './components/Modal/Modal';

function App() {
	const [isModalOpen, setModal] = useState(false);
	const [currentArtist, setCurrentArtist] = useState({});
	const OpenModal = () => setModal(true);
	const CloseModal = () => setModal(false);

	const HandleArtistClick = (artist) => {
		console.log(artist);
	};

	return (
		<div className="App">
			<MainTemplate>
				{isModalOpen && <Modal open={isModalOpen} onClose={CloseModal} />}

				<Header />
				<Banner />
				<ExpandMessage />

				<Artists handleArtistChange={HandleArtistClick} />
			</MainTemplate>
		</div>
	);
}

export default App;
