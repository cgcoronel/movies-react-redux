import React from 'react';
import './Estrenos.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlbaseImage = 'http://image.tmdb.org/t/p/w154';

const Contenedor = styled.ul`
	margin:0;
`
const ItemPelicula = styled(Link)`
	list-style: none;
	display:inline-block;
	background:url(${props=>urlbaseImage+props.pelicula.poster_path}) no-repeat;
	background-size: cover;
	min-width:200px;
	margin:10px;
	height:300px;
	font-family: 'Amatic SC', cursive;
	color:yellow;
	font-size:22px;
	font-weight:bold;
	>span{
		display:none;
		background: rgba(38,50,56,0.5);
	}
	&:hover{
		>span{
			display:block;
		}
	}
`

const Estrenos = ({peliculas}) => {
	return (

			<Contenedor>
				{
					peliculas.map(pelicula => (
						<ItemPelicula key={pelicula.id} to={`/detalles/${pelicula.id}`}pelicula={pelicula}>
							<span>{pelicula.title}</span>
						</ItemPelicula>
					))
				}
			</Contenedor>

	)
}

export default Estrenos
