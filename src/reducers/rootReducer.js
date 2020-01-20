import { combineReducers } from "redux";
import currentUser from "./userReducer";
import albums from "./albumsReducer";
import producersAll from "./producersReducer";
import engineersAll from "./engineersReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
	currentUser,
	albums,
	producersAll,
	engineersAll,
	loading
})

export default rootReducer
