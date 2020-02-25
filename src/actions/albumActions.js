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
				// on successful album creation, load album into store
				dispatch({type: "ADD_ALBUM", payload: albumData})
			} else {
				// on failed album creation, display message
				alert(albumData.message)
			}
		})
	}
)

const deleteAlbum = id => {
	const url = "http://localhost:3000/api/v1/albums/" + id

	return (
		dispatch => {
			fetch(url, {
				method: "DELETE",
				credentials: "include",
				headers: {"Accept": "application/json"}
			})
			.then(resp => resp.json())
			.then(data => {
				if (data.message === "Album deleted") {
					// on successful album deletion, remove album from store
					dispatch({type: "DELETE_ALBUM", payload: id})
				} else {
					// on failed album deletion, display message
					alert("Error occurred")
				}
			})
		}
	)
}

export { addAlbum, deleteAlbum }
