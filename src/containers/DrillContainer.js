import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import FiltersContainer from "./FiltersContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import Status from "../components/Status";
import Navigation from "../components/Navigation";

const DrillContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Status history={props.history} />
				<Navigation /><br />
				<FiltersContainer /><br />
				<ShowAlbumsContainer drill={true} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(DrillContainer)
