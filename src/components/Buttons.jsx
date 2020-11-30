import React from 'react';
import styled from 'styled-components';

// Styling - input
const StyledInput = styled.input`
	cursor: pointer;
`;

// Styling - label
const StyledLabel = styled.label`
	cursor: pointer;
	font-size: 1rem;

	/* Hover - label */
	:hover {
		text-decoration: underline;
		cursor: pointer;
		color: rgb(53, 70, 50);
	}
`;

// Create the Buttons
function FilterButton({ value, name }) {
	return (
		<>
			<StyledInput type='radio' id={value} name={name} value={value} />
			<StyledLabel htmlFor={value}>{value}</StyledLabel>
		</>
	);
}

export default FilterButton;
