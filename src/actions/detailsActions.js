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

const addEngineer = engineerData => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/engineers", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(engineerData)
		})
		.then(resp => resp.json())
		.then(engineerData => {
			if (!engineerData.message) {
				dispatch({type: "ADD_ENGINEER", payload: engineerData})
			} else {
				alert(engineerData.message)
			}
		})
	}
)

export { getEngineersAll, addEngineer }
