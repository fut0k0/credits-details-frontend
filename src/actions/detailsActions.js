const getProducersAll = () => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/producers", {
			method: "GET",
			credentials: "include",
			headers: {"Accept": "application/json"}
		})
		.then(resp => resp.json())
		.then(producerData => dispatch({type: "SET_PRODUCERS_ALL", payload: producerData}))
	}
)



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



const addProducer = producerData => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/producers", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(producerData)
		})
		.then(resp => resp.json())
		.then(producerData => {
			if (!producerData.message) {
				dispatch({type: "ADD_PRODUCER", payload: producerData})
			} else {
				alert(producerData.message)
			}
		})
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

export { getProducersAll, getEngineersAll, addProducer, addEngineer }
