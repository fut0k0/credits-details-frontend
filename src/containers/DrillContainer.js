import React from "react";
import Logout from "../components/Logout";

const DrillContainer = props => {
	return (
		<div>
			<Logout history={props.history} /><br />
			Drill
		</div>
	)
}

export default DrillContainer
