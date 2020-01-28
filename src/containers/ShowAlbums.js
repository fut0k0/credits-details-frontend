import React from "react";
import ShowAlbum from "../components/ShowAlbum";

const ShowAlbums = ({ albums }) => {

	return (
		<div>
			Show Albums<br /><br />
			{albums.map(album => <ShowAlbum key={album.id} album={album} />)}
		</div>
	)

}

export default ShowAlbums
