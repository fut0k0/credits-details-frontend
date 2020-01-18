import { combineReducers } from "redux";
import currentUser from "./userReducer";
import albums from "./albumsReducer";
import engineersAll from "./engineersReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
	currentUser,
	albums,
	engineersAll,
	loading
})

export default rootReducer
