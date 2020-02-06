const yearsReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_YEARS_ALL":
			return action.payload
		case "ADD_YEAR":
			return [...state, action.payload]
		case "CLEAR_STORE":
			return []
		default:
			return state
	}
}

export default yearsReducer
