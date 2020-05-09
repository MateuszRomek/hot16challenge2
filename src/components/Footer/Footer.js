import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from '../../assets/icon/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/icon/github.svg';
const FooterContainer = styled.div`
	height: 50px;
	background-color: rgba(209, 234, 78, 0.25);
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Paragraph = styled.p`
	color: rgb(89, 89, 89);
	display: flex;
	align-items: center;
	font-style: italic;
	font-size: 1.2rem;
	& a {
		display: block;
		margin: 0 1rem;
	}
	& svg {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Paragraph>
				Realization: Mateusz Romek{' '}
				<a target="blank" href="https://www.instagram.com/mateusz_romek/">
					<InstagramIcon />
				</a>
				<a target="blank" href="https://github.com/MateuszRomek">
					<GithubIcon />
				</a>
			</Paragraph>
		</FooterContainer>
	);
};

export default Footer;
