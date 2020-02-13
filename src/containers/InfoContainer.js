import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";
import Info from "../components/Info";

const InfoContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Status history={props.history} />
				<Navigation /><br />
				Info<br /><br />
				<Info />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(InfoContainer)
