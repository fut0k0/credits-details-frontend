import React from "react";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainer";
import Logout from "./Logout";

const Info = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Info
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(Info)
