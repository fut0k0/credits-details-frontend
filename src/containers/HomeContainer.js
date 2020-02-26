import React from "react";
import { connect } from "react-redux";
import InfoContainer from "./InfoContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeContainer = props => {
	if (props.currentUser) {
		// if current user exists, return info page elements
		return <InfoContainer history={props.history} />
	} else {
		return (
			// if current user doesn't exist, return login & signup options 
			<div className="Home">
				<Login history={props.history} /><br /><br /><br />
				<Signup history={props.history} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(HomeContainer)
