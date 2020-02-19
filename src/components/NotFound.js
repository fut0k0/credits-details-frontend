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
				<Status history={props.history} />
				<Navigation />
				<div className="NotFound">
					<p>This page / URL does not exist.</p>
					<p>Use the navigation links to return to the application.</p>
				</div>
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(NotFound)
