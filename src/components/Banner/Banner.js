import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2.2rem 0;
	& iframe {
		border-radius: 10px;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`;

const Banner = () => {
	return (
		<div>
			<StyledAnchor
				href="https://www.siepomaga.pl/hot16challenge"
				title="Siepomaga.pl - zbiórki charytatywne"
			>
				<iframe
					title="siepomaga"
					frameBorder="0"
					height="370px"
					scrolling="no"
					src="https://www.siepomaga.pl/hot16challenge/skarbonka/banner"
					width="300px"
				></iframe>
			</StyledAnchor>
		</div>
	);
};

export default Banner;
