import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
	<nav>
		<NavLink
			className="NavLink"
			activeClassName="NavLink-current"
			to="/drill"
			exact>
			Drill
		</NavLink>
		<NavLink
			className="NavLink"
			activeClassName="NavLink-current"
			to="/manage"
			exact>
			Manage
		</NavLink>
		<NavLink
			className="NavLink"
			activeClassName="NavLink-current"
			to="/info"
			exact>
			Info
		</NavLink>
	</nav>
)

export default Navigation
