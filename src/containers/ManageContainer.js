import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Logout from "../components/Logout";
import AddDetails from "../components/AddDetails";

const ManageContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Manage<br /><br />
				<AddDetails />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(ManageContainer)
