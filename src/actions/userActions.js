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
				// on successful login, load user into store & send to drill page
				dispatch({type: "SET_CURRENT_USER", payload: userData});
				history.push("/drill");
			} else {
				// on failed login, display error message
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
				// on successful signup, load user into store & send to info page
				dispatch({type: "SET_CURRENT_USER", payload: userData});
				history.push("/info");
			} else {
				// on failed signup, display error message
				alert(userData.message)
			}
		})
	}
)

const logout = history => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/logout", {
			method: "DELETE",
			credentials: "include",
			headers: {"Accept": "application/json"}
		})
		.then(resp => resp.json())
		.then(data => {
			// on logout, empty store & send user to root page
			dispatch({type: "CLEAR_STORE"});
			history.push("/");
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
				// if session holds user, load user into store
				dispatch({type: "SET_CURRENT_USER", payload: userData})
			} else {
				// if session doesn't hold user, display message
				alert(userData.message)
			}
		})
	}
)

export { login, signup, logout, getCurrentUser }
