import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeContainer = ({ history }) => (
	<main className="Home">
		<Login history={history} />
		<Signup history={history} />
	</main>
)

export default HomeContainer
