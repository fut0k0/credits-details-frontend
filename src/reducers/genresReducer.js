const genresReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_GENRES_ALL":
			return action.payload
		case "ADD_GENRE":
			return [...state, action.payload]
		case "CLEAR_GENRES_ALL":
			return []
		default:
			return state
	}
}

export default genresReducer
