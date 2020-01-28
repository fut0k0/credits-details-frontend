import React from "react"

const ShowAlbum = ({ album }) => <div>{album.title + " by " + album.artist.name}</div>

export default ShowAlbum
