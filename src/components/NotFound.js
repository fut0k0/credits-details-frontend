import React from "react";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainer";
import Status from "./Status";
import Navigation from "./Navigation";

const NotFound = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Status history={props.history} /><br />
				<Navigation /><br />
				<p>This page / URL does not exist. Use the navigation links to return to the application.</p>
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(NotFound)
