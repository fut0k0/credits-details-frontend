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
			.then(userData => console.log(userData))
	}
)

export { login }
