const loadUserAlbums = albums => (
	dispatch => dispatch({type: "LOAD_USER_ALBUMS", payload: albums})
)

export { loadUserAlbums }
