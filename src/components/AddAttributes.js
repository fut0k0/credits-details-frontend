import React from "react";
import { connect } from "react-redux";
import { getAttributeAll, addAttribute } from "../actions/detailsActions";
import AttributeForm from "./AttributeForm";

class AddAttributes extends React.PureComponent {

	state = {
		producer: "",
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

	handleSubmit = (event, attribute) => {
		const obj = {}

		event.preventDefault();
		obj[attribute] = {name: this.state[attribute]};
		this.props.addAttribute(attribute, obj);
		this.setState({
			[attribute]: ""
		});
	}

	render() {
		return (
			<div>
				Add Attributes<br /><br />
				<AttributeForm
					attribute={"producer"}
					value={this.state.producer}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"engineer"}
					value={this.state.engineer}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
			</div>
		)
	}

}

export default connect(null, { getAttributeAll, addAttribute })(AddAttributes)
