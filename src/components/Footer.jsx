import React from 'react';
import styled from 'styled-components';

// Styling - div wrapper
const StyledDiv = styled.div`
    padding: 1em;
    background-color: #155540ce;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: white;
`;

// Styling - p
const StyledP = styled.p`
    margin: 0 auto;

`;

// Styling - link (a)
const StyledLink = styled.a`
	font-style: italic;
	color: white;
    cursor: pointer;

	:hover {
		/* color: #232222; */
        /* color: red; */
        text-decoration: none;
	}

	/* :visited {
		color: white;
	} */
`;

function Footer() {
	return (
		<StyledDiv>
			<StyledP>
				Datavisualisatie & verhaal gemaakt en geschreven door{' '}
				<StyledLink href='https://ralfzonneveld.com/'>
					Ralf Zonneveld
				</StyledLink>
			</StyledP>
			<StyledP>
				<StyledLink href='https://github.com/ralfz123/frontend-applications'>
					GitHub link
				</StyledLink>
			</StyledP>
		</StyledDiv>
	);
}

export default Footer;
