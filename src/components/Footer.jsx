import React from 'react';
import styled from 'styled-components';

// Styling - div wrapper
const StyledDiv = styled.div`
	padding: 1em;
	background-color: #155540ce;
	/* background-color: #084d36; */
	/* background: linear-gradient(90deg, rgba(64,120,54,1) 0%, rgba(8,154,99,1) 100%); */

	border-radius: 10px 10px 0px 0px;
	text-align: center;
	color: #ffffff;
`;

// Styling - p
const StyledP = styled.p`
	margin: 0 auto;
	font-weight: 300;
	font-size: .9em;
	padding: 0.2em 0em;
`;

// Styling - link (a)
const StyledLink = styled.a`
	font-style: italic;
	color: #ffffff;
    cursor: pointer;

	&:hover {
        color: #033a28;
        text-decoration: none;
	}
`;

// ・ ∙ •

function Footer() {
	return (
		<StyledDiv>
			<StyledP>
				Datavisualisatie & verhaal gemaakt door{' '}
				<StyledLink target='_blank' href='https://ralfzonneveld.com/'>
					Ralf Zonneveld  {' '}
				</StyledLink>
				©  2020 • {' '}
				<StyledLink
					target='_blank'
					href='https://github.com/ralfz123/frontend-applications'
				>
					GitHub
				</StyledLink>
			</StyledP>
			<StyledP></StyledP>
		</StyledDiv>
	);
}

export default Footer;
