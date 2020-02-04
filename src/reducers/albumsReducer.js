const albumsReducer = (state=[], action) => {
	switch (action.type) {
		case "LOAD_USER_ALBUMS":
			return action.payload
		case "FILTER_ALBUMS":
			let albumsFiltered = [...state]

			if (!!action.payload.artist_id) {
				albumsFiltered = albumsFiltered.filter(album => album.artist.id === parseInt(action.payload.artist_id))
			};
			if (!!action.payload.year_id) {
				albumsFiltered = albumsFiltered.filter(album => album.year.id === parseInt(action.payload.year_id))
			};
			return albumsFiltered;
		default:
			return state
	}
}

export default albumsReducer
