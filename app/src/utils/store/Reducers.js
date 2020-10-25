/* eslint-disable indent */
import { combineReducers } from "redux";
import C from "./Constants";

export const token = (state = null, action) => {
	switch (action.type) {
		case C.ADD_ACCESS_TOKEN:
			// console.log("adding access token: ", action.payload);
			return action.payload;
		case C.REMOVE_ACCESS_TOKEN:
			// console.log("removing access token: ", action.payload);
			return null;
		default:
			return state;
	}
};

export const user = (state = {}, action) => {
	switch (action.type) {
		case C.ADD_USER:
			return action.payload;
		case C.REMOVE_USER:
			return {};
		default:
			return state;
	}
};

export default combineReducers({
	token,
	user,
});