/*
artist obj = {
	id,
	name
}
*/
const artistsReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_ARTISTS_ALL":
			return action.payload
		case "ADD_ARTIST":
			return [...state, action.payload]
		case "CLEAR_STORE":
			return []
		default:
			return state
	}
}

export default artistsReducer
