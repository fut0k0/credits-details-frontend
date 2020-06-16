import React from "react";
import { connect } from "react-redux";
import { addAttribute } from "../actions/attributesActions";
import AttributeForm from "./AttributeForm";

class AddAttributes extends React.PureComponent {

	// track controlled form values
	state = {
		artist: "",
		year: "",
		genre: "",
		producer: "",
		mixer: "",
		engineer: ""
	}

	// handle controlled form changes
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	// handle controlled form submission
	handleSubmit = (event, attribute) => {
		const obj = {}

		event.preventDefault();
		// format controlled form data for back end
		obj[attribute] = {name: this.state[attribute]};
		this.props.addAttribute(attribute, obj);
		// reset controlled form after submission
		this.setState({
			[attribute]: ""
		});
	}

	// use AttributeForm component for each desired attribute
	render() {
		return (
			<section className="AddAttributes">
				Add Attributes<br /><br />
				<AttributeForm
					attribute={"artist"}
					value={this.state.artist}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"year"}
					value={this.state.year}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"genre"}
					value={this.state.genre}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"producer"}
					value={this.state.producer}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"mixer"}
					value={this.state.mixer}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
				<AttributeForm
					attribute={"engineer"}
					value={this.state.engineer}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit} />
			</section>
		)
	}

}

export default connect(null, { addAttribute })(AddAttributes)
