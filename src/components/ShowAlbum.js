import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/albumActions";

const button = (deleteAlbum, id) => (
	<button onClick={() => deleteAlbum(id)}>Delete</button>
)

// generate album card
const ShowAlbum = ({ deleteAlbum, album, drill }) => (
	<div className="Album">
		<h4>{album.title}</h4>
		<p>{album.artist.name}</p>
		<p>{album.year.name + ", " + album.genre.name}</p>
		<div>
			<p>{"Producer: " + album.producer.name}</p>
			<p>{"Mixer: " + album.mixer.name}</p>
			<p>{"Engineer: " + album.engineer.name}</p>
		</div>
		{/* drill prop serves as boolean flag (true for drill page, false for manage page) */}
		{drill ? null : button(deleteAlbum, album.id)}
	</div>
)

export default connect(null, { deleteAlbum })(ShowAlbum)
