import {
	combineReducers
}
from 'redux';
import {
	map
}
from './map';


const rootReducer = combineReducers({
	map: map,
})
export default rootReducer;