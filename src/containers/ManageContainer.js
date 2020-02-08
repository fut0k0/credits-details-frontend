import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";
import AddAlbumForm from "../components/AddAlbumForm";
import AddAttributes from "../components/AddAttributes";

const ManageContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Status history={props.history} /><br />
				<Navigation /><br />
				Manage<br /><br />
				<AddAlbumForm /><br />
				<AddAttributes /><br />
				<ShowAlbumsContainer drill={false} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(ManageContainer)
