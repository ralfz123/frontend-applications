import React from 'react';
import img1 from '../img/huidige-scenario.png';
import img2 from '../img/toekomst-scenario.png';

function FutureVision() {
	return (
		<div className='layout-block'>
			<h2>Toekomstbeeld</h2>
			<p>
				Naarmate er dus veel ongebruikte laadpalen in de omgeving
				Hilversum zijn, lijkt het mij niet onverstandig om als gemeente
				Hilversum een onderzoek te gaan starten naar hoeveel laadpalen
				er weinig tot niet worden gebruikt. Aan de hand daarvan kan er
				een afweging gemaakt worden of die palen worden weggehaald en op
				nieuwe plekken worden neergezet (in grotere getalen) waar andere
				palen meestal al vrij snel bezet zijn. Dit is beter voor milieu
				en mens.
			</p>
			<p>
				Ik denk overigens dat de drukte in de avond veel gaat toenemen,
				omdat er nu al veel laadpalen bezet zijn in de avond en de groei
				van elektrische auto's blijft maar stijgen.{' '}
			</p>
			<p>Huidige scenario</p>
			<img alt='huidige scenario in de avond' src={img1} width='500px' />
			<p>Toekomst scenario</p>
			<img alt='toekomst scenario in de avond' src={img2} width='500px' />

			{/* <p>
				De meeste mensen nemen ook steeds meer een eigen laadpaal aan
				huis. Waardoor je dus geen gezeur hebt met andere bestuurders en
				je je dus geen zorgen daarover hoeft te maken. Dus, als je
				overstapt op elektrisch (of hybride) rijden en je wil je auto
				nog rustig kunnen opladen zonder dat je rekening hoeft te houden
				met anderen, zorg er dan voor dat je een laadpaal aanschaft voor
				bij jou thuis. Over 20 jaar trouwens denk ik dat er bij elke
				voordeur een laadpaal standaard aanwezig is, dus dan hoef je je
				daar al geen zorgen meer over te maken bij het wonen in een
				nieuwe woning.
			</p> */}
		</div>
	);
}

export default FutureVision;
