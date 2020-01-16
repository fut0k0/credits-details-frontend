import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Logout from "../components/Logout";

const DrillContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
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
