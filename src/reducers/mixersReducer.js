const mixersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_MIXERS_ALL":
			return action.payload
		case "ADD_MIXER":
			return [...state, action.payload]
		default:
			return state
	}
}

export default mixersReducer
