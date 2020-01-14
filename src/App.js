import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/userActions";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

class App extends React.Component {

	componentDidMount() {
		this.props.getCurrentUser()
	}

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

export default connect(null, { getCurrentUser })(App)
