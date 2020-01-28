import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import Logout from "../components/Logout";
import AddAlbumForm from "../components/AddAlbumForm";
import AddAttributes from "../components/AddAttributes";

const ManageContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Manage<br /><br />
				<AddAlbumForm /><br />
				<AddAttributes /><br />
				<ShowAlbumsContainer albums={props.currentUser.albums} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(ManageContainer)
