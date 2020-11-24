import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    cursor: pointer;
`

const StyledLabel = styled.label`
	cursor: pointer;
    font-size: 1rem;

    :hover {
        text-decoration: underline;
	    cursor: pointer;
	    color: rgb(53, 80, 50);
    }

`


function Button({value}) {
	return (
		<>
			<StyledInput type='radio' value={value} />
            <StyledLabel htmlFor={value}>{value}</StyledLabel>
		</>
	);
}

export default Button;
