const userReducer = (state=null, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return action.payload
		case "CLEAR_CURRENT_USER":
			return null
		case "ADD_ALBUM":
			return {...state, albums: [...state.albums, action.payload]}
		case "DELETE_ALBUM":
			return {...state, albums: state.albums.filter(album => album.id !== action.payload)}
		default:
			return state
	}
}

export default userReducer
