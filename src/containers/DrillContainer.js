import React from "react";
import { connect } from "react-redux";
import Logout from "../components/Logout";

const DrillContainer = props => {
	if (!props.currentUser) {
		return null
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Drill
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(DrillContainer)
