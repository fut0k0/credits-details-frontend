import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeContainer = props => {
	return (
		<div>
			<Login history={props.history} /><br />
			<Signup history={props.history} />
		</div>
	)
}

export default HomeContainer
