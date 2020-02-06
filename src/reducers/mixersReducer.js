const mixersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_MIXERS_ALL":
			return action.payload
		case "ADD_MIXER":
			return [...state, action.payload]
		case "CLEAR_MIXERS_ALL":
			return []
		default:
			return state
	}
}

export default mixersReducer
