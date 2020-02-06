import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Logout from "../components/Logout";
import Info from "../components/Info";

const InfoContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Info<br /><br />
				<Info />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(InfoContainer)
