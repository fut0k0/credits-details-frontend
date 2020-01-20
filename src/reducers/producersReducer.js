const producersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_PRODUCERS_ALL":
			return action.payload
		case "ADD_PRODUCER":
			return [...state, action.payload]
		default:
			return state
	}
}

export default producersReducer
