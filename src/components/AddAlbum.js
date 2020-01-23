import React from "react";
import { connect } from "react-redux";

class AddAlbum extends React.PureComponent {

	state = {
		title: "",
		format: "(N/A)"
	}

// add componentDidMount & retrieve data

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		const formData = {
			album: {
				title: this.state.title,
				format: this.state.format,
				user_id: this.props.currentUser.id
			}
		}

		event.preventDefault();
		console.log(formData);
		this.setState({
			title: "",
			format: "(N/A)"
		});
	}

	render() {
		return (
			<div>
				AddAlbum<br /><br />
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
					</label>
					<input type="submit" />
				</form>
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }))(AddAlbum)
