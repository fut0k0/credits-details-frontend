import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const button = (deleteAlbum, id) => (
	<span>
		<br />
		<button onClick={() => deleteAlbum(id)}>Delete</button>
	</span>
)

const ShowAlbum = ({ deleteAlbum, album, drill }) => (
	<div className="Album">
		<strong>{album.title}</strong><br />
		{"by"}<br />
		{album.artist.name}<br /><br />
		<span className="Album-details">
			{album.year.name + ", " + album.genre.name}<br /><br />
			{"Producer: " + album.producer.name}<br />
			{"Mixer: " + album.mixer.name}<br />
			{"Engineer: " + album.engineer.name}<br />
		</span>
		{drill ? null : button(deleteAlbum, album.id)}
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
