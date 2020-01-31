import React from "react";
import { connect } from "react-redux";
import ShowAlbum from "../components/ShowAlbum";

const ShowAlbumsContainer = ({ currentUser, albumsFiltered, drill }) => {
	let albums = []

	drill ? albums = albumsFiltered : albums = currentUser.albums

	albums.sort((a, b) => {
		const titleA = a.title.toUpperCase();
		const titleB = b.title.toUpperCase();

		if (titleA < titleB) {
			return -1
		} else if (titleA > titleB) {
			return 1
		} else {
			const artistA = a.artist.name.toUpperCase();
			const artistB = b.artist.name.toUpperCase();

			if (artistA < artistB) {
				return -1
			} else if (artistA > artistB) {
				return 1
			} else {
				return 0
			}
		}
	})

	return (
		<div>
			Show Albums<br /><br />
			{albums.map(album => <ShowAlbum key={album.id} album={album} drill={drill} />)}
		</div>
	)
}

export default connect(({ currentUser, albumsFiltered }) => ({ currentUser, albumsFiltered }))(ShowAlbumsContainer)