import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

const Status = ({ currentUser, history }) => (
	<section className="Status">
		Logged in: {currentUser.username + " / "}
		<Logout history={history} />
	</section>
)

export default connect(({ currentUser }) => ({ currentUser }))(Status)
