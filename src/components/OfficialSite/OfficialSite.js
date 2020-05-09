import React from 'react';
import styled from 'styled-components';
import { MediumHeadline } from '../../assets/styles/SharedStyledComponents/SharedStyledComponents';

const Container = styled.div`
	padding: 1rem 1.5rem;
	margin: 1.5rem 0;
`;

const P = styled.p`
	font-size: 1.5rem;
`;

const OfficialSite = () => {
	return (
		<Container>
			<MediumHeadline>
				To nie jest oficjalna strona internetowa Hot16Challenge2!
			</MediumHeadline>
			<P>
				Ta strona powstała hobbystycznie. Jeśli chcesz sprawdzić oficjalną
				strone wbijaj na{' '}
				<a href="https://hot16challenge.network/">#Hot16Challenge2</a>
			</P>
		</Container>
	);
};

export default OfficialSite;
