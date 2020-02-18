import React from "react";
import { connect } from "react-redux";
import { getAttributeAll } from "../actions/attributesActions";
import { addAlbum } from "../actions/albumActions";
import AlbumFormItem from "./AlbumFormItem";
import formatsData from "../data/formatsData";

class AddAlbumForm extends React.PureComponent {

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

	componentDidMount() {
		this.props.getAttributeAll("artists");
		this.props.getAttributeAll("years");
		this.props.getAttributeAll("genres");
		this.props.getAttributeAll("producers");
		this.props.getAttributeAll("mixers");
		this.props.getAttributeAll("engineers");
	}

	validateFormData = () => (
		this.state.title && this.state.format && this.state.artist_id && this.state.year_id && this.state.genre_id && this.state.producer_id && this.state.mixer_id && this.state.engineer_id ? true : false
	)

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
		this.props.addAlbum(formData);
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

	render() {
		return (
			<div className="AddAlbumForm">
				Add Album<br /><br />
				<form onSubmit={this.handleSubmit}>
					<div className="AddAlbumForm-item">
						<label>
							Title:{" "}
							<input
								type="text"
								name="title"
								placeholder="(enter title)"
								value={this.state.title}
								onChange={this.handleChange} />
						</label>
					</div>
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
					<div className="AddAlbumForm-sb">
						<span className="btn-sb">
							{this.validateFormData() ? <input type="submit" /> : <input type="submit" disabled="disabled" />}
						</span>
					</div>
				</form>
			</div>
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
