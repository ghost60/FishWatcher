import {
	updateObject, updateItemInArray
}
from '../utility';

const initialState = {
	center: [30, 103]
};

export const map = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE":
			return updateObject(state, {
				center: action.data
			});
		default:
			return state;
	}
}