import React from "react";
import { connect } from "react-redux";
import { getAttributeAll } from "../actions/attributesActions";

class AddAlbum extends React.PureComponent {

	state = {
		title: "",
		format: "(N/A)",
		artist_id: "",
		year_id: "",
		genre_id: "",
		producer_id: "",
		mixer_id: "",
		engineer_id: ""
	}

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

	handleSubmit = event => {
		const formData = {
			album: {
				...this.state,
				user_id: this.props.currentUser.id
			}
		}

		event.preventDefault();
		console.log(formData);
		this.setState({
			title: "",
			format: "(N/A)",
			artist_id: "",
			year_id: "",
			genre_id: "",
			producer_id: "",
			mixer_id: "",
			engineer_id: ""
		});
	}

	render() {
		return (
			<div>
				Add Album<br /><br />
				<form onSubmit={this.handleSubmit}>
					<label>
						Title:{" "}
						<input
							type="text"
							name="title"
							placeholder="(enter title)"
							value={this.state.title}
							onChange={this.handleChange} />
					</label><br />
					<label>
						Format:{" "}
						<select
							name="format"
							value={this.state.format}
							onChange={this.handleChange}>
							<option value="(N/A)">(N/A)</option>
							<option value="disc">disc</option>
							<option value="digital">digital</option>
							<option value="cassette">cassette</option>
							<option value="other">other</option>
							<option value="stream">stream</option>
							<option value="vinyl">vinyl</option>
						</select>
					</label><br />
					<input type="submit" />
				</form>
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), { getAttributeAll })(AddAlbum)
