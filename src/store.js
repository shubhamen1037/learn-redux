import { createStore } from "redux";
import roorReducer from './reducers/index';

const store = createStore(roorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;