import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Destaque from '../components/Destaque';
import Estrenos from '../components/Estrenos';
import TituloSeccion from '../components/TituloSeccion';
import Header from '../components/Header';
import SearchResult from '../components/SearchResult';

import {connect} from 'react-redux';

import {getEstrenos, getProximosEstrenos} from '../redux/actions/moviesActions';

class HomePage extends React.Component {

	componentDidMount(){
		this.props.getEstrenos();
		this.props.getProximosEstrenos();
	}

	renderResults =() => {
			const {data	} = this.props.search;
			if (data.length === 0){
				return (
					<React.Fragment>
							<Destaque pelicula={this.props.estrenos.peliculaDestacada} />
							<TituloSeccion>Estrenos:</TituloSeccion>
							<Estrenos peliculas={this.props.estrenos.data} />
							<TituloSeccion>Proximamente:</TituloSeccion>
							<Estrenos peliculas={this.props.proximosEstrenos.data} />
					</React.Fragment>
				)
			} else {
				return (
					<SearchResult data={data}/>
				)
			}
	}

	render(){
		return (
			<div>
				<Header path={this.props.match.path}/>
				{this.renderResults()}
			</div>
		)
	}
}

const mapStateToProps = ({ estrenos, proximosEstrenos, search }) => {
	return {
		estrenos,
		proximosEstrenos,
		search
	}
}

export default connect(mapStateToProps, {
	getEstrenos,
	getProximosEstrenos
})(HomePage);
