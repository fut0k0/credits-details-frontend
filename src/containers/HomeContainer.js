import React from "react";
import { connect } from "react-redux";
import InfoContainer from "./InfoContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeContainer = ({ currentUser, history }) => {
	if (currentUser) {
		// if current user exists, return info page elements
		return <InfoContainer history={history} />
	} else {
		return (
			// if current user doesn't exist, return login & signup options 
			<div className="Home">
				<Login history={history} /><br /><br /><br />
				<Signup history={history} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(HomeContainer)
