const engineersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_ENGINEERS_ALL":
			return action.payload
		case "ADD_ENGINEER":
			return [...state, action.payload]
		default:
			return state
	}
}

export default engineersReducer
