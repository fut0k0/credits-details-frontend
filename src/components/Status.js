import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

const Status = ({ history, currentUser }) => (
	<div>
		Status<br /><br />
		Logged in: {currentUser.username + " / "}
		<Logout history={history} />
	</div>
)

export default connect(({ currentUser }) => ({ currentUser }))(Status)
