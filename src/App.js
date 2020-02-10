import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from "./actions/userActions";
import HomeContainer from "./containers/HomeContainer";
import ManageContainer from "./containers/ManageContainer";
import DrillContainer from "./containers/DrillContainer";
import InfoContainer from "./containers/InfoContainer";

class App extends React.Component {

	componentDidMount() {
		this.props.getCurrentUser()
	}

	render() {
		return (
			<div>
				App<br /><br />
				<Switch>
					<Route path="/" exact component={HomeContainer} />
					<Route path="/manage" exact component={ManageContainer} />
					<Route path="/drill" exact component={DrillContainer} />
					<Route path="/info" exact component={InfoContainer} />
				</Switch>
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), { getCurrentUser })(App)
