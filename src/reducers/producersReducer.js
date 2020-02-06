const producersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_PRODUCERS_ALL":
			return action.payload
		case "ADD_PRODUCER":
			return [...state, action.payload]
		case "CLEAR_STORE":
			return []
		default:
			return state
	}
}

export default producersReducer
