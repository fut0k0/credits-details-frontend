import React from "react";
import { connect } from "react-redux";
import { getEngineersAll } from "../actions/detailsActions";

class AddDetails extends React.PureComponent {

	componentDidMount() {
		this.props.getEngineersAll()
	}

	render() {
		return (
			<div>
				Add Details
			</div>
		)
	}

}

export default connect(null, { getEngineersAll })(AddDetails)
