const albumsReducer = (state=[], action) => {
	switch (action.type) {
		case "LOAD_USER_ALBUMS":
			return action.payload
		default:
			return state
	}
}

export default albumsReducer
