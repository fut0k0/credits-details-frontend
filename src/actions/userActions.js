const login = (loginData, history) => (
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
				dispatch({type: "SET_CURRENT_USER", payload: userData});
				history.push("/drill");
			} else {
				alert(userData.message)
			}
		})
	}
)

const signup = (signupData, history) => (
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
			if (!userData.message) {
				dispatch({type: "SET_CURRENT_USER", payload: userData});
				history.push("/manage");
			} else {
				alert(userData.message)
			}
		})
	}
)

const logout = () => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/logout", {
			method: "DELETE",
			credentials: "include",
			headers: {"Accept": "application/json"}
		})
		.then(resp => resp.json())
		.then(data => {
			dispatch({type: "CLEAR_CURRENT_USER"});
		})
	}
)

const getCurrentUser = () => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/getcurrentuser", {
			method: "GET",
			credentials: "include",
			headers: {"Accept": "application/json"}
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

export { login, signup, logout, getCurrentUser }
