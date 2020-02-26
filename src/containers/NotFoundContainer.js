import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";

const NotFound = ({ currentUser, history }) => {
	if (!currentUser) {
		// if current user doesn't exist, return home elements
		return <HomeContainer history={history} />
	} else {
		return (
			// if current user exists, return unmatched url page elements
			<div>
				<Status history={history} />
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
