const engineersReducer = (state=[], action) => {
	switch (action.type) {
		case "ADD_ENGINEER":
			return [...state, action.payload]
		default:
			return state
	} 
}

export default engineersReducer
