const artistsReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_ARTISTS_ALL":
			return action.payload
		case "ADD_ARTIST":
			return [...state, action.payload]
		default:
			return state
	}
}

export default artistsReducer
