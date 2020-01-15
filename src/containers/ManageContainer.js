import React from "react";
import Logout from "../components/Logout";

const ManageContainer = props => {
	return (
		<div>
			<Logout history={props.history} /><br />
			Manage
		</div>
	)
}

export default ManageContainer
