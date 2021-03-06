import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from "./actions/userActions";
import RootContainer from "./containers/RootContainer";
import ManageContainer from "./containers/ManageContainer";
import DrillContainer from "./containers/DrillContainer";
import InfoContainer from "./containers/InfoContainer";
import NotFoundContainer from "./containers/NotFoundContainer";
import HomeContainer from "./containers/HomeContainer";
import Status from "./components/Status";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends React.Component {

	loadApp = () => {
		if (this.props.currentUser) {
			// if current user exists, return app elements
			return (
				<>
					<Navigation />
					<Status history={this.props.history} />
					<Switch>
						<Route path="/" exact component={RootContainer} />
						<Route path="/manage" exact component={ManageContainer} />
						<Route path="/drill" exact component={DrillContainer} />
						<Route path="/info" exact component={InfoContainer} />
						{/* handle unmatched urls */}
						<Route component={NotFoundContainer} />
					</Switch>
				</>
			)
		} else {
			// if current user doesn't exist, return home elements
			return <HomeContainer history={this.props.history} />
		}
	}

	// check session for current user & load into store if exists
	componentDidMount() {
		this.props.getCurrentUser()
	}

	render() {
		return (
			<div className="App">
				<header>Drill<span> Credits & Details</span></header>
				{this.loadApp()}
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), { getCurrentUser })(App)
