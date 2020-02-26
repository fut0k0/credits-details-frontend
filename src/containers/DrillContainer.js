import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import FiltersContainer from "./FiltersContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";

const DrillContainer = ({ currentUser, history }) => {
	if (!currentUser) {
		// if current user doesn't exist, return home elements
		return <HomeContainer history={history} />
	} else {
		return (
			// if current user exists, return drill page elements
			<div>
				<Status history={history} />
				<Navigation />
				<FiltersContainer />
				<ShowAlbumsContainer drill={true} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(DrillContainer)
