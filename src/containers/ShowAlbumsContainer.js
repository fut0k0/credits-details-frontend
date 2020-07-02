import React from "react";
import { connect } from "react-redux";
import ShowAlbum from "../components/ShowAlbum";

const ShowAlbumsContainer = ({ currentUser, albumsFiltered, drill }) => {
	let albums = []

	// drill prop serves as boolean flag (true for drill page, false for manage page)
	drill ? albums = albumsFiltered : albums = currentUser.albums

	// sort albums by title & artist name
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

	// display album count & card for each album
	return (
		<section>
			<h3>Albums <span>{"(" + albums.length + ")"}</span></h3>
			<div className="Albums">
				{albums.map(album => <ShowAlbum key={album.id} album={album} drill={drill} />)}
			</div>
		</section>
	)
}

export default connect(({ currentUser, albumsFiltered }) => ({ currentUser, albumsFiltered }))(ShowAlbumsContainer)
