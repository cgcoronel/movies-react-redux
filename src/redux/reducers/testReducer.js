import type from '../actions/type';

const initialState = {
	test: "Hola Mundo",
	fecha: new Date()
}

export default (state = initialState, action) => {
	switch (action.type) {
		case type.UPDATE_FECHA:
			return Object.assign({}, state, {
				fecha: action.payload
			})
		default:
			return state;
	}
}
