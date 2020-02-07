import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

const Status = props => (
	<div>
		Status
	</div>
)

export default connect(({ currentUser }) => ({ currentUser }))(Status)
