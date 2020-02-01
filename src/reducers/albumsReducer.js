const albumsReducer = (state=[], action) => {
	switch (action.type) {
		case "LOAD_USER_ALBUMS":
			return action.payload
		case "FILTER_ALBUMS":
			return state.filter(album => album[action.payload.attribute].id === parseInt(action.payload.id))
		default:
			return state
	}
}

export default albumsReducer
