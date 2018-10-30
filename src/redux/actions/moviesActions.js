import type from './type';
import axios from 'axios';

const urlBase = 'http://api.themoviedb.org/3/';
const key = '1db7d49dcfd6e5236aaa3bb0eb4ccaa2';

export const getEstrenos = () => dispatch => {
	dispatch({
		type: type.GET_ESTRENOS,
		payload: axios.get(`${urlBase}movie/now_playing?api_key=${key}&language=es`)
	})
}

export const getProximosEstrenos = () => dispatch => {
	dispatch({
		type: type.GET_PROXIMOS_ESTRENOS,
		payload: axios.get(`${urlBase}movie/upcoming?api_key=${key}&language=es`)
	})
}

export const getCreditos = (peliculaid) => dispatch => {
	axios.get(`${urlBase}movie/${peliculaid}/credits?api_key=${key}&language=es`).then(
		(res) => {
			console.log(res.data.cast);
		}
	)

	dispatch({
		type: type.GET_CREDITOS,
		payload: axios.get(`${urlBase}movie/${peliculaid}/credits?api_key=${key}&language=es`)
	})
}

export const getPeliculaDetalle = (peliculaid) => dispatch => {
	dispatch({
		type: type.GET_PELICULA_DETALLE,
		payload: axios.get(`${urlBase}movie/${peliculaid}?api_key=${key}&language=es`)
	})
}

export const getBusqueda = (search) => dispatch => {
	dispatch({
		type: type.GET_BUSQUEDA,
		payload: axios.get(`${urlBase}search/movie?query=${search}&api_key=${key}&language=es`)
	})
}

export const clearSearch = () => {
		return {
			type: type.CLEAR_SEARCH
		}
}
