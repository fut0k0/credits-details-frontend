import React from "react";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import AddAlbumForm from "../components/AddAlbumForm";
import AddAttributes from "../components/AddAttributes";

const ManageContainer = () => (
	<>
		<div className="Manage">
			<AddAlbumForm />
			<AddAttributes />
		</div>
		<ShowAlbumsContainer drill={false} />
	</>
)

export default ManageContainer
