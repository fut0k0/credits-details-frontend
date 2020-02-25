/*
engineer obj = {
	id,
	name
}
*/
const engineersReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_ENGINEERS_ALL":
			return action.payload
		case "ADD_ENGINEER":
			return [...state, action.payload]
		case "CLEAR_STORE":
			return []
		default:
			return state
	}
}

export default engineersReducer
