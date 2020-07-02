import React from "react";
import { connect } from "react-redux";
import { getAttributeAll } from "../actions/attributesActions";
import { addAlbum } from "../actions/albumActions";
import AlbumFormItem from "./AlbumFormItem";
import formatsData from "../data/formatsData";

class AddAlbumForm extends React.PureComponent {

	// track controlled form values
	state = {
		title: "",
		format: "",
		artist_id: "",
		year_id: "",
		genre_id: "",
		producer_id: "",
		mixer_id: "",
		engineer_id: ""
	}

	// load attribute datasets into store
	componentDidMount() {
		this.props.getAttributeAll("artists");
		this.props.getAttributeAll("years");
		this.props.getAttributeAll("genres");
		this.props.getAttributeAll("producers");
		this.props.getAttributeAll("mixers");
		this.props.getAttributeAll("engineers");
	}

	// check for empty data fields (before enabling submit)
	validateFormData = () => (
		this.state.title && this.state.format && this.state.artist_id && this.state.year_id && this.state.genre_id && this.state.producer_id && this.state.mixer_id && this.state.engineer_id ? true : false
	)

	// handle controlled form changes
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	// handle controlled form submission
	handleSubmit = event => {
		// format controlled form data for back end
		const formData = {
			album: {
				...this.state,
				user_id: this.props.currentUser.id
			}
		}

		event.preventDefault();
		this.props.addAlbum(formData);
		// reset controlled form after submission
		this.setState({
			title: "",
			format: "",
			artist_id: "",
			year_id: "",
			genre_id: "",
			producer_id: "",
			mixer_id: "",
			engineer_id: ""
		});
	}

	// use AlbumFormItem component for each desired album attribute (excluding title)
	render() {
		return (
			<section>
				<h2>Add Album</h2>
				<form onSubmit={this.handleSubmit}>
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor="title">
										Title:
									</label>
								</td>
								<td>
									<input
										type="text"
										id="title"
										name="title"
										placeholder="(enter title)"
										value={this.state.title}
										onChange={this.handleChange} />
								</td>
							</tr>
							<AlbumFormItem
								item={"format"}
								data={formatsData}
								value={this.state.format}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"artist"}
								data={this.props.artistsAll}
								value={this.state.artist_id}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"year"}
								data={this.props.yearsAll}
								value={this.state.year_id}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"genre"}
								data={this.props.genresAll}
								value={this.state.genre_id}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"producer"}
								data={this.props.producersAll}
								value={this.state.producer_id}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"mixer"}
								data={this.props.mixersAll}
								value={this.state.mixer_id}
								onChange={this.handleChange} />
							<AlbumFormItem
								item={"engineer"}
								data={this.props.engineersAll}
								value={this.state.engineer_id}
								onChange={this.handleChange} />
							<tr>
								<td colSpan="2">
									{this.validateFormData() ? <input type="submit" value="Add" /> : <input type="submit" value="Add" disabled="disabled" />}
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</section>
		)
	}

}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	artistsAll: state.artistsAll,
	yearsAll: state.yearsAll,
	genresAll: state.genresAll,
	producersAll: state.producersAll,
	mixersAll: state.mixersAll,
	engineersAll: state.engineersAll
})

export default connect(mapStateToProps, { getAttributeAll, addAlbum })(AddAlbumForm)
