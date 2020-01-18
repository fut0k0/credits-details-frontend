const getEngineersAll = () => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/engineers", {
			method: "GET",
			credentials: "include",
			headers: {"Accept": "application/json"}
		})
		.then(resp => resp.json())
		.then(engineerData => dispatch({type: "SET_ENGINEERS_ALL", payload: engineerData}))
	}
)

export { getEngineersAll }
