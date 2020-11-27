import React, { useState, useRef, useEffect } from 'react';
import FilterButton from './Buttons';

function Filters() {
	return (
		<>
			<div className='layout-block'>
			<h2>Filters</h2>
				<h3>Moment van de dag</h3>
				<FilterButton value='Overdag' />
				<FilterButton value='Avond' />
			
				<h3>Status laadpalen</h3>
				<FilterButton value='Beschikbaar' />
				<FilterButton value='Bezet' />
			</div>
		</>
	);
}

export default Filters;
