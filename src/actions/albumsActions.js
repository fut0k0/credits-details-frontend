const setUserAlbums = albums => ({type: "SET_USER_ALBUMS", payload: albums})

const filterAlbums = filterData => ({type: "FILTER_ALBUMS", payload: filterData})

export { setUserAlbums, filterAlbums }
