import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/userActions";

const Logout = props => (
	<div>
		Logout<br />
		<button onClick={props.logout}>Log out</button>
	</div>
)

export default connect(null, { logout })(Logout)
