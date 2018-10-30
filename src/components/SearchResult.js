import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlbaseImage = 'http://image.tmdb.org/t/p/w185';

const Contenedor = styled.div`
	display:flex;
	background:black;
	flex-wrap:wrap;
`

const ItemPelicula = styled(Link)`
	list-style: none;
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


export default ({data}) => {
	return (
		<Contenedor>
		{
			data.map(
			pelicula => (
					<ItemPelicula key={pelicula.id} to={`/detalles/${pelicula.id}`}pelicula={pelicula}>
						<span>{pelicula.title}</span>
					</ItemPelicula>

			))
		}
		</Contenedor>
	)
}
