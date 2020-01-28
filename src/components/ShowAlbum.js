import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const button = (deleteAlbum, id) => (
	<button onClick={() => deleteAlbum(id)}>Delete</button>
)

const ShowAlbum = ({ deleteAlbum, album, options }) => (
	<div>
		{album.title + " by " + album.artist.name + " "}
		{options ? button(deleteAlbum, album.id) : null}
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
