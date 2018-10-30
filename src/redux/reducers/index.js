import {combineReducers} from 'redux';
import test from './testReducer';
import estrenos from './estrenosReducer';
import proximosEstrenos from './proximosEstrenosReducer';
import creditos from './creditosReducer';
import pelicula_detalle from './peliculaDetalleReducer';
import search from './searchReducer';

export default combineReducers({
	test,
	estrenos,
	proximosEstrenos,
	creditos,
	pelicula_detalle,
	search
})
