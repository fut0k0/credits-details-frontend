import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const button = (deleteAlbum, id) => (
	<span>
		<br />
		<button className="btn-dl" onClick={() => deleteAlbum(id)}>Delete</button>
	</span>
)

// generate album card
const ShowAlbum = ({ deleteAlbum, album, drill }) => (
	<div className="Album">
		<strong>{album.title}</strong><br />
		<span>{"by"}</span><br />
		{album.artist.name}<br /><br />
		<span>
			{album.year.name + ", " + album.genre.name}<br /><br />
			{"Producer: " + album.producer.name}<br />
			{"Mixer: " + album.mixer.name}<br />
			{"Engineer: " + album.engineer.name}<br />
		</span>
		{/* drill prop serves as boolean flag (true for drill page, false for manage page) */}
		{drill ? null : button(deleteAlbum, album.id)}
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
