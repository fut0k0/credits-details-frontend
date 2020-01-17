import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Info from "../components/Info";

const HomeContainer = props => {
	if (props.currentUser) {
		return <Info history={props.history} />
	} else {
		return (
			<div>
				<Login history={props.history} /><br />
				<Signup history={props.history} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(HomeContainer)
