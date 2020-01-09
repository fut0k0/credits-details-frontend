import { combineReducers } from "redux";
import currentUser from "./userReducer";
import albums from "./albumsReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
	currentUser,
	albums,
	loading
})

export default rootReducer
