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
		// if current user doesn't exist, return home elements
		return <HomeContainer history={props.history} />
	} else {
		return (
			// if current user exists, return manage page elements
			<div>
				<Status history={props.history} />
				<Navigation />
				<div className="Manage">
					<AddAlbumForm />
					<AddAttributes />
				</div>
				<ShowAlbumsContainer drill={false} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(ManageContainer)
