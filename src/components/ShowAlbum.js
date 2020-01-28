import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const handleClick = (deleteAlbum, id) => deleteAlbum(id)

const ShowAlbum = ({ deleteAlbum, album }) => (
	<div>
		{album.title + " by " + album.artist.name + " "}
		<button onClick={() => handleClick(deleteAlbum, album.id)}>
			Delete
		</button>
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
