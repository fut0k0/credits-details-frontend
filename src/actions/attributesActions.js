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

const addAttribute = (attribute, data) => {
	const url = "http://localhost:3000/api/v1/" + attribute + "s";
	const type = "ADD_" + attribute.toUpperCase();

	return (
		dispatch => {
			fetch(url, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(data)
			})
			.then(resp => resp.json())
			.then(attributeData => {
				if (!attributeData.message) {
					dispatch({type, payload: attributeData})
				} else {
					alert(attributeData.message)
				}
			})
		}
	)
}

export { getAttributeAll, addAttribute }
