import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import albums from "./albumsReducer";

const rootReducer = combineReducers({
	currentUser,
	albums,
	loading: false
})

export default rootReducer
