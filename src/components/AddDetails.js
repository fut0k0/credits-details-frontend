import React from "react";
import { connect } from "react-redux";
import { getEngineersAll } from "../actions/detailsActions";
import { addEngineer } from "../actions/detailsActions";

class AddDetails extends React.PureComponent {

	state = {
		engineer: ""
	}

	componentDidMount() {
		this.props.getEngineersAll()
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addEngineer({engineer: {name: this.state.engineer}});
		this.setState({
			engineer: ""
		});
	}

	render() {
		return (
			<div>
				Add Details<br /><br />
				<form onSubmit={this.handleSubmit}>
					<label>
						Engineer:{" "}
						<input
							type="text"
							name="engineer"
							placeholder="(enter name)"
							value={this.state.engineer}
							onChange={this.handleChange} />
					</label>{" "}
					{this.state.engineer ? <input type="submit" />
						: <input type="submit" disabled="disabled" />}
				</form>
			</div>
		)
	}

}

export default connect(null, { getEngineersAll, addEngineer })(AddDetails)
