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
		color: rgb(53, 80, 50);
	}
`;

// Create the Buttons
function FilterButton({ value }) {
	return (
		<>
			<StyledInput type='radio' id={value} name={value} value={value} />
			<StyledLabel for={value}>{value}</StyledLabel>
		</>
	);
}

export default FilterButton;
