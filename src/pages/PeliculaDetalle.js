import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Destaque from '../components/Destaque';
import Header from '../components/Header';
import Cast from '../components/Cast';

import { getCreditos, getPeliculaDetalle } from '../redux/actions/moviesActions';

class PeliculaDetalle extends React.Component {

	componentDidMount(){
		const {peliculaid} = this.props.match.params;
		this.props.getPeliculaDetalle(peliculaid);
	  this.props.getCreditos(peliculaid);
	}

	render () {
		return (
			<div>
				<Header fecha={this.props.test.fecha}/>
				<Destaque pelicula={this.props.pelicula_detalle.data}></Destaque>
				<Cast cast={this.props.creditos.data}/>
			</div>
		)
	}
}

const mapStateToProps = ({ creditos, pelicula_detalle, test }) => {
	return {
		creditos,
		pelicula_detalle,
		test
	}
}

export default connect(mapStateToProps,{
		getCreditos,
		getPeliculaDetalle
})(PeliculaDetalle);
