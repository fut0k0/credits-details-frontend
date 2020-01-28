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
					dispatch({type: "DELETE_ALBUM", payload: id})
				} else {
					alert("Error occurred")
				}
			})
		}
	)
}

export { addAlbum, deleteAlbum }
