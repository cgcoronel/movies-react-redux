import type from './type';

export const updateFecha = () => {
	return {
		type: type.UPDATE_FECHA,
		payload: new Date()
	}
}
