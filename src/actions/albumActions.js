const addAlbum = data => (
	dispatch => {
		fetch("http://localhost:3000/api/v1/albums", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(resp => resp.json())
		.then(albumData => {
			if (!albumData.message) {
				dispatch({type: "ADD_ALBUM", payload: albumData})
			} else {
				alert(albumData.message)
			}
		})
	}
)

export { addAlbum }
