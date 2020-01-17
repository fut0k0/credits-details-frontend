import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<NavLink to="/drill" exact>Drill</NavLink>{" "}
			<NavLink to="/manage" exact>Manage</NavLink>{" "}
			<NavLink to="/info" exact>Info</NavLink>
		</div>
	)	
}

export default Navigation
