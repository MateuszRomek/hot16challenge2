import React, { useState } from 'react';
import styled from 'styled-components';
import { MediumHeadline } from '../../assets/styles/SharedStyledComponents/SharedStyledComponents';

const ExpandMessageContainer = styled.div`
	padding: 1rem 1.5rem;
	margin: 1.5rem 0;
	@media (min-width: 1281px) {
		grid-column: 1/-1;
		grid-row: 1;
	}
`;
const ExpandMessageLanguages = styled.div`
	width: 100%;
	padding: 0.5rem 0.5rem;
`;

const ExpantMessageContent = styled.div`
	transition: height 0.4s ease-in-out;
	height: ${(props) => (props.isExpand ? '260px' : '0px')};
	overflow: hidden;
	margin-bottom: 1rem;
	@media (min-width: 1281px) {
		height: ${(props) => (props.isExpand ? '140px' : '0px')};
	}
`;

const Button = styled.button`
	transition: color 0.5s, background-color 0.5s;
	display: ${(props) => (props.isCenter ? 'block' : 'inline-block')};
	margin: ${(props) => (props.isCenter ? '0 auto' : null)};
	padding: 0.8rem 1rem;
	text-transform: uppercase;
	border: 2px solid black;
	color: ${(props) => (props.isActive ? 'white' : 'black')};
	font-weight: bold;
	background-color: ${(props) => (props.isActive ? 'black' : 'transparent')};
	border-radius: 5px;
	&:nth-child(2) {
		margin-left: 1.5rem;
	}
`;

const ExpandMessageText = styled.p`
	color: rgb(55, 60, 63);
	font-size: 1.3rem;
	line-height: 1.6rem;
	text-align: justify;

	@media (min-width: 1281px) {
		padding: 1rem 4rem 1rem 0;
	}
`;

const ExpandMessage = () => {
	const [isExpand, setExpand] = useState(false);
	const [currentLanguage, setLanguage] = useState('pl');
	const onExpandChange = () => {
		setExpand((state) => !state);
	};

	const enText = `Hot16challenge is an initiative for rappers and singers. Idea of the action is to record one verse including 16 bars, publish it and then nominate four more artists who have 72 hours to reply. Main goal of Hot16challenge is to activate as many artists as possible and to mobilize firstly hip-hop industry, then hopefully whole music industry to help fight COVID-19 by music. 
  Hot16challenge participants and their fans as well can donate to link or any charity campaign in fight with coronavirus.`;
	const plText = `Hot16challenge to wyzwanie polegające na nagraniu 16 wersów i nominowaniu kolejnych osób do akcji, które mają stworzyć swój kawałek w 72 godziny. Druga edycja legendarnej rapowanej akcji to nie tylko nagrywanie muzyki, ale również pomoc w walce z koronawirusem. Wraz z  #hot16challenge2 ruszyła zbiórka - “Beef z koronawirusem #hot16challenge” dla Siepomaga.pl. Zarówno nominowani jak i fani mogą wpłacać pieniądze na pomoc pracownikom służby zdrowia w walce z Koronawirusem. Zbiórka dostępna jest pod adresem: http://siepomaga.pl/hot16challenge. Całą akcję można śledzić na stronie http://hot16challenge.network`;

	return (
		<ExpandMessageContainer>
			<MediumHeadline style={{ margin: '10px 0' }}>
				Czym jest Hot16Challenge?
			</MediumHeadline>
			<ExpantMessageContent isExpand={isExpand}>
				<ExpandMessageLanguages>
					<Button
						isActive={currentLanguage === 'pl'}
						onClick={() => setLanguage('pl')}
					>
						Polski
					</Button>
					<Button
						isActive={currentLanguage === 'en'}
						onClick={() => setLanguage('en')}
					>
						English
					</Button>
				</ExpandMessageLanguages>
				<ExpandMessageText>
					{currentLanguage === 'pl' ? plText : enText}
				</ExpandMessageText>
			</ExpantMessageContent>
			<Button onClick={onExpandChange} isCenter={true}>
				{isExpand ? 'Zwiń' : 'Rozwiń'}
			</Button>
		</ExpandMessageContainer>
	);
};

export default ExpandMessage;
