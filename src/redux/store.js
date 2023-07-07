import {combineReducers, createStore} from "redux";
import AppReducer from "./AppReducer";


let reducers = combineReducers({
	AppData: AppReducer
})

let store = createStore(reducers)

window.store = store

export default store;