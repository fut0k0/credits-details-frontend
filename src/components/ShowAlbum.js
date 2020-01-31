import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const button = (deleteAlbum, id) => (
	<button onClick={() => deleteAlbum(id)}>Delete</button>
)

const ShowAlbum = ({ deleteAlbum, album, drill }) => (
	<div>
		{album.title + " by " + album.artist.name + " "}
		{drill ? null : button(deleteAlbum, album.id)}
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
