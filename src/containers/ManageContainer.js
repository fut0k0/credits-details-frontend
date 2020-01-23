import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Logout from "../components/Logout";
import AddAlbum from "../components/AddAlbum";
import AddAttributes from "../components/AddAttributes";

const ManageContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Manage<br /><br />
				<AddAlbum /><br />
				<AddAttributes />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(ManageContainer)
