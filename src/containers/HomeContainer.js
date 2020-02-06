import React from "react";
import { connect } from "react-redux";
import InfoContainer from "./InfoContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeContainer = props => {
	if (props.currentUser) {
		return <InfoContainer history={props.history} />
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
