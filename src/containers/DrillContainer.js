import React from "react";
import { connect } from "react-redux";
import HomeContainer from "./HomeContainer";
import FiltersContainer from "./FiltersContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";
import Logout from "../components/Logout";

const DrillContainer = props => {
	if (!props.currentUser) {
		return <HomeContainer history={props.history} />
	} else {
		return (
			<div>
				<Logout history={props.history} /><br />
				Drill<br /><br />
				<FiltersContainer /><br />
				<ShowAlbumsContainer drill={true} />
			</div>
		)
	}
}

export default connect(({ currentUser }) => ({ currentUser }))(DrillContainer)
