import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from "./actions/userActions";
import HomeContainer from "./containers/HomeContainer";
import ManageContainer from "./containers/ManageContainer";
import DrillContainer from "./containers/DrillContainer";
import InfoContainer from "./containers/InfoContainer";
import NotFoundContainer from "./containers/NotFoundContainer";
import "./App.css";

class App extends React.Component {

	// check session for current user & load into store if exists
	componentDidMount() {
		this.props.getCurrentUser()
	}

	render() {
		return (
			<div className="App">
				<div className="Title"><strong>Drill Credits & Details</strong></div>
				<Switch>
					<Route path="/" exact component={HomeContainer} />
					<Route path="/manage" exact component={ManageContainer} />
					<Route path="/drill" exact component={DrillContainer} />
					<Route path="/info" exact component={InfoContainer} />
					{/* handle unmatched urls */}
					<Route component={NotFoundContainer} />
				</Switch>
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), { getCurrentUser })(App)
