import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

class App extends React.Component {

	render() {
		return (
			<div>
				App<br /><br />
				<Login /><br />
				<Signup /><br />
				<Logout /><br />
			</div>
		)
	}

}

export default App
