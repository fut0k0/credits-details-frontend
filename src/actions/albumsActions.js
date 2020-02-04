const loadUserAlbums = albums => (
	dispatch => dispatch({type: "LOAD_USER_ALBUMS", payload: albums})
)

const filterAlbums = filterData => (
	dispatch => dispatch({type: "FILTER_ALBUMS", payload: filterData})
)

export { loadUserAlbums, filterAlbums }
