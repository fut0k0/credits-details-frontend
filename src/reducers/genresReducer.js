const genresReducer = (state=[], action) => {
	switch (action.type) {
		case "GET_GENRES_ALL":
			return action.payload
		case "ADD_GENRE":
			return [...state, action.payload]
		default:
			return state
	}
}

export default genresReducer
