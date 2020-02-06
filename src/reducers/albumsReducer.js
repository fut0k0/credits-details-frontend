const albumsReducer = (state=[], action) => {
	switch (action.type) {
		case "SET_USER_ALBUMS":
			return action.payload
		case "CLEAR_STORE":
			return []
		case "FILTER_ALBUMS":
			let albumsFiltered = [...state]

			if (!!action.payload.artist_id) {
				albumsFiltered = albumsFiltered.filter(album => album.artist.id === parseInt(action.payload.artist_id))
			};
			if (!!action.payload.year_id) {
				albumsFiltered = albumsFiltered.filter(album => album.year.id === parseInt(action.payload.year_id))
			};
			if (!!action.payload.genre_id) {
				albumsFiltered = albumsFiltered.filter(album => album.genre.id === parseInt(action.payload.genre_id))
			};
			if (!!action.payload.producer_id) {
				albumsFiltered = albumsFiltered.filter(album => album.producer.id === parseInt(action.payload.producer_id))
			};
			if (!!action.payload.mixer_id) {
				albumsFiltered = albumsFiltered.filter(album => album.mixer.id === parseInt(action.payload.mixer_id))
			};
			if (!!action.payload.engineer_id) {
				albumsFiltered = albumsFiltered.filter(album => album.engineer.id === parseInt(action.payload.engineer_id))
			};
			return albumsFiltered;
		default:
			return state
	}
}

export default albumsReducer
