import { combineReducers } from "redux";
import { userLoginThunk } from "./user/thunks";

const rootReducer = combineReducers({ user: userLoginThunk });

export default rootReducer;
