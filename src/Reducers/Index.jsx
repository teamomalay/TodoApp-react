import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  todoReducers,
});

export default RootReducer;
