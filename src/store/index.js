import { combineReducers, createStore } from "redux";
import reducerCard from "./modules/produts/reducer";
const reducers = combineReducers({value: reducerCard})
const store = createStore(reducers)
export default store