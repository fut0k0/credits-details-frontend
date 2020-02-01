const loadUserAlbums = albums => (
	dispatch => dispatch({type: "LOAD_USER_ALBUMS", payload: albums})
)

const filterAlbums = (attribute, id) => (
	dispatch => dispatch({type: "FILTER_ALBUMS", payload: {attribute, id}})
)

export { loadUserAlbums, filterAlbums }
