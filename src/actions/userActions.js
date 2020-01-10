const login = loginData => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(loginData)
		})
		.then(resp => resp.json())
		.then(userData => {
			if (!userData.message) {
				dispatch({type: "SET_CURRENT_USER", payload: userData})
			} else {
				alert(userData.message)
			}
		})
	}
)

const signup = signupData => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/signup", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(signupData)
		})
		.then(resp => resp.json())
		.then(userData => {
			console.log(userData)
		})
	}
)

export { login, signup }
