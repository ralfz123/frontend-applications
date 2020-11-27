import React from 'react';
import styled from 'styled-components';

// Styling - h3
const StyledHeadingThree = styled.h3`
	font-style: italic;
	padding-top: 0.5em;
`;

// const StyledP = styled.p`
// 	/* margin: 0 auto;
// 	width: 46vw; */
// `;

function Insights() {
	return (
		<div className='layout-block'>
			<h2>Interessante inzichten</h2>
			<StyledHeadingThree>Spits in de avond</StyledHeadingThree>
			<p>
				Uit de datavisualisatie is te zien dat er in de avond hevige
				spits is tijdens het opladen van de elektrische auto’s. Naja, in
				ieder geval zijn de laadpalen meer bezet in de avond dan in de
				ochtend. Hoe zou dit komen? Zijn dit de auto's die al heel de
				dag aan het laden zijn? Of misschien zijn ze in de middag
				begonnen met laden en zijn ze tot in de late avonduurtjes nog
				steeds bezig. Het kan ook zo zijn dat de laadpalen bezet zijn
				met auto's die al opgeladen zijn, de zogenoemde
				'Laadpaalklevers'. Het is opmerkelijk om te zien dat dus in de
				avond meer bezette laadpalen zijn dan 's ochtends.
			</p>

			<StyledHeadingThree>
				Ochtendritueel zorgt voor een overschot aan niet gebruikte laadpalen
			</StyledHeadingThree>
			<p>
				Mijn vraag is hier: waarom zijn er nog zoveel beschikbare
				laadpalen over, zowel in de ochtend als in de avond? En ook nog
				omdat de meeste mensen rond 08:00u naar hun werk gaan, zullen er
				dus meer beschikbare laadpalen bijkomen. Het gaat dan wel om
				laadpalen op verschillende plekken, maar toch zie je een aantal
				in de datavisualisatie die altijd beschikbaar zijn. Worden deze
				laadpalen dan nooit of veel te weinig gebruikt? Misschien zouden
				ze eens onderzoek moeten gaan doen of de laadpalen daadwerkelijk
				allemaal gebruikt worden. Dan kunnen ze misschien de laadpalen
				verplaatsen naar plekken waar de laadpalen meestal al snel bezet
				zijn.
			</p>

			{/* <StyledHeadingThree>?...?</StyledHeadingThree>
			<StyledP>
				Zijn dit auto’s die iets na dit tijdstip van de lader worden
				gehaald en de bestuurders hiermee naar het werk gaan? Of zijn
				het auto’s die zojuist aan de lader zijn gezet door
				taxichauffeurs die net hun ritje erop hebben zitten van het
				vervoeren van 3 dronken feestgangers?
			</StyledP> */}
		</div>
	);
}

export default Insights;
