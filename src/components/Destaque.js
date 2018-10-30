import React from 'react'
import styled from 'styled-components';

const urlbaseImage = 'http://image.tmdb.org/t/p/w780/';

const Inicio = styled.div`
		background: url(${props=>urlbaseImage+props.pelicula.backdrop_path}) no-repeat;
		background-size: cover;
		height: 700px;
		font-size: 72px;
		font-family: 'Amatic SC', cursive;
		font-weight:bold;
		color: white;
`

const PeliculaInfo = styled.div`
		position:relative;
		color:rgba(205,220,57,1);
`

const PeliculaInfoContent = styled.div`
		position: absolute;
		top:150px;
		left:50px;
		background: rgba(38,50,56,0.5);
		padding: 10px;
`

const PeliculaInfoTitulo = styled.div`
		color: rgba(255,179,0,1);
`

const PeliculaInfoOverview = styled.div`
		font-size: 24px;
		max-width:350px
		font-family: 'Amatic SC', cursive;
		font-weight:bold;
`

const VotoPromedio = styled.span`
		color:rgba(100,221,23,1);
`

const Cargando = styled.div`
		text-align:center;
		font-size:22px;
`

export default ({pelicula}) => {
	if (pelicula) {
		return (
			<Inicio pelicula={pelicula}>
					<PeliculaInfo>
							<PeliculaInfoContent>
									<PeliculaInfoTitulo>{pelicula.title}</PeliculaInfoTitulo>

									<PeliculaInfoOverview>
										{pelicula.overview}
									</PeliculaInfoOverview>

									<VotoPromedio>{pelicula.vote_average}/10</VotoPromedio>
							</PeliculaInfoContent>
					</PeliculaInfo>
			</Inicio>
		)
	} else {
		return (
				<Cargando>Cargando...</Cargando>
		)
	}
}
