import type from '../actions/type';

const initialState = {
	data: []
}

export default (state=initialState, action)=>{
		switch (action.type) {
			case type.GET_BUSQUEDA_FULFILLED:
					const {results} = action.payload.data;
					return Object.assign({}, state, {
						data: results
					})
			case type.CLEAR_SEARCH:
					return Object.assign({}, state, {
						data: []
					})
			default:
					return state
		}
}
