import { combineReducers,compose,alias_createStore as createStore } from "redux"
import { toyReducer } from "./reducers/toy.reduser"

const rootReducer=combineReducers({
    toyModule:toyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = alias_createStore(rootReducer, composeEnhancers())

window.gStore = store

