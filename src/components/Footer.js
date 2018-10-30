import React from 'react';
import styled from 'styled-components';


const Footer = (props) => {

	const ContenedorFooter = styled.div`
		background:rgba(38,50,56,1);
		padding:20px;
	`


	return (
		<ContenedorFooter>
				<h3>Pie de pagina</h3>
		</ContenedorFooter>
	)
}

export default Footer
