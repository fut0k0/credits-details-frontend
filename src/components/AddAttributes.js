import React from "react";
import { connect } from "react-redux";
import { getAttributeAll, addAttribute } from "../actions/attributesActions";
import AttributeForm from "./AttributeForm";

class AddAttributes extends React.PureComponent {

	state = {
		artist: "",
		year: "",
		genre: "",
		producer: "",
		mixer: "",
		engineer: ""
	}

// will probably move these to parent container at some point
	componentDidMount() {
		this.props.getAttributeAll("artists");
		this.props.getAttributeAll("years");
		this.props.getAttributeAll("genres");
		this.props.getAttributeAll("producers");
		this.props.getAttributeAll("mixers");
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
			</div>
		)
	}

}

export default connect(null, { getAttributeAll, addAttribute })(AddAttributes)
