import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";
import Info from "../components/Info";

const InfoContainer = props => {
	if (!props.currentUser) {
		// if current user doesn't exist, return home elements
		return <HomeContainer history={props.history} />
	} else {
		return (
			// if current user exists, return info page elements
			<div>
				<Status history={props.history} />
				<Navigation />
				<Info />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(InfoContainer)
