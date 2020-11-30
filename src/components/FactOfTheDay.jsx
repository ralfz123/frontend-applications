import React from 'react';
import styled from 'styled-components';

// Styling - h3
const StyledWrapper = styled.div`
	width: 50vw;
`;

const StyledFact = styled.p`
	background-color: #2d5a4cce;
	padding: 0.5em;
	border-radius: 10px;
	font-weight: 600;
	font-size: 1.5em;
	width: 65%;
`;

const StyledSubtitle = styled.p`
	font-style: italic;
`;

const StyledSource = styled.p`
	font-size: 0.8em;
	font-style: italic;
`;

function FactOfTheDay() {
	return (
		<div className='layout-block'>
			<StyledWrapper>
				<h2>Feit van de dag</h2>
				<StyledSubtitle>Wist u dat...</StyledSubtitle>
				<StyledFact>Benzine goedkoper is dan elektriciteit? 💸</StyledFact>
				<StyledSource>
					Bron:
					https://www.hellocars.nl/tips-tools/oplaadpunten-elektrische-auto/
				</StyledSource>
			</StyledWrapper>
		</div>
	);
}

export default FactOfTheDay;
