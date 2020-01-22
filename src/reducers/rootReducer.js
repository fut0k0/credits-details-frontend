import { combineReducers } from "redux";
import currentUser from "./userReducer";
import albums from "./albumsReducer";
import artistsAll from "./artistsReducer";
import yearsAll from "./yearsReducer";
import genresAll from "./genresReducer";
import producersAll from "./producersReducer";
import mixersAll from "./mixersReducer";
import engineersAll from "./engineersReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
	currentUser,
	albums,
	artistsAll,
	yearsAll,
	genresAll,
	producersAll,
	mixersAll,
	engineersAll,
	loading
})

export default rootReducer
