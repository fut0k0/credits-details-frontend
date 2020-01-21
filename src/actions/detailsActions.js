const getAttributeAll = attribute => {
	const url = "http://localhost:3000/api/v1/" + attribute;
	const type = "SET_" + attribute.toUpperCase() + "_ALL";
	
	return (
		dispatch => {
			fetch(url, {
				method: "GET",
				credentials: "include",
				headers: {"Accept": "application/json"}
			})
			.then(resp => resp.json())
			.then(attributeData => dispatch({type, payload: attributeData}))
		}
	)
}

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

export { getAttributeAll, addProducer, addEngineer }
