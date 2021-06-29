import {createStore, combineReducers} from "redux";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({dictionary});
const store = createStore(rootReducer);

export default store;
