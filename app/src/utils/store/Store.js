import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./Reducers";

const consoleMessages = store => next => action => {
	console.groupCollapsed(`dispatching action => ${action.type}`);
	console.log("initial action: ", action);
	console.log("initial state: ", store.getState());

	const result = next(action);

	console.log("Final state: ", store.getState().token);
	console.log("Result: ", result);
	console.groupEnd();

	return result;
};

// export the storeFactory
export default (initialState = {}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(
		appReducer,
		initialState
	);
};