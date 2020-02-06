const setUserAlbums = albums => (
	dispatch => dispatch({type: "SET_USER_ALBUMS", payload: albums})
)

const filterAlbums = filterData => (
	dispatch => dispatch({type: "FILTER_ALBUMS", payload: filterData})
)

export { setUserAlbums, filterAlbums }
