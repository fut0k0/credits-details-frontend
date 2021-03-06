/*
genre obj = {
	id,
	name
}
*/
const genresReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_GENRES_ALL":
			return action.payload
		case "ADD_GENRE":
			return [...state, action.payload]
		case "CLEAR_STORE":
			return []
		default:
			return state
	}
}

export default genresReducer
