import React from "react";
import { connect } from "react-redux";
import { getAttributeAll, addProducer, addEngineer } from "../actions/detailsActions";

class AddDetails extends React.PureComponent {

	state = {
		engineer: ""
	}

	componentDidMount() {
		this.props.getAttributeAll("producers");
		this.props.getAttributeAll("engineers");
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

export default connect(null, { getAttributeAll, addProducer, addEngineer })(AddDetails)
