import React from "react";
import ShowAlbum from "../components/ShowAlbum";

const ShowAlbums = ({ albums }) => {
	albums.sort((a, b) => {
		const artistA = a.artist.name.toUpperCase();
		const artistB = b.artist.name.toUpperCase();

		if (artistA < artistB) {
			return -1
		} else if (artistA > artistB) {
			return 1
		} else {
			return 0
		}
	})

	albums.sort((a, b) => {
		const titleA = a.title.toUpperCase();
		const titleB = b.title.toUpperCase();

		if (titleA < titleB) {
			return -1
		} else if (titleA > titleB) {
			return 1
		} else {
			return 0
		}
	})

	return (
		<div>
			Show Albums<br /><br />
			{albums.map(album => <ShowAlbum key={album.id} album={album} />)}
		</div>
	)
}

export default ShowAlbums
