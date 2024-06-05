import { combineReducers } from "redux";
import authUser from "./auth";

export default combineReducers({
    auth: authUser,
});