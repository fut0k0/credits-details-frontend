import React from "react";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import AddAlbumForm from "../components/AddAlbumForm";
import AddAttributes from "../components/AddAttributes";

const ManageContainer = () => (
	<main className="Manage">
		<AddAlbumForm />
		<AddAttributes />
		<ShowAlbumsContainer drill={false} />
	</main>
)

export default ManageContainer
