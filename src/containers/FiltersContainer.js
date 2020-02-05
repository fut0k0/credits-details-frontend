import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/userActions";
import { loadUserAlbums, filterAlbums } from "../actions/albumsActions";
import Filter from "../components/Filter";

class FiltersContainer extends React.PureComponent {

	state = {
		artist_id: "",
		year_id: "",
		genre_id: "",
		producer_id: "",
		mixer_id: "",
		engineer_id: ""
	}

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleClick = event => {
		if (event.target.name !== "all" ) {
			this.setState({[event.target.name]: ""})
		} else {
			this.setState({
				artist_id: "",
				year_id: "",
				genre_id: "",
				producer_id: "",
				mixer_id: "",
				engineer_id: ""
			})
		}
	}

	componentDidMount() {
		this.props.getCurrentUser();
		this.props.loadUserAlbums(this.props.currentUser.albums);
	}

	componentDidUpdate() {
		this.props.loadUserAlbums(this.props.currentUser.albums);
		this.props.filterAlbums(this.state);
	}

	render() {
		return (
			<div>
				Filters<br /><br />
				<button
					name="all"
					onClick={this.handleClick}>
					Clear All
				</button>
				<Filter
					item={"artist"}
					data={this.props.currentUser.artists}
					value={this.state.artist_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"year"}
					data={this.props.currentUser.years}
					value={this.state.year_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"genre"}
					data={this.props.currentUser.genres}
					value={this.state.genre_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"producer"}
					data={this.props.currentUser.producers}
					value={this.state.producer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"mixer"}
					data={this.props.currentUser.mixers}
					value={this.state.mixer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"engineer"}
					data={this.props.currentUser.engineers}
					value={this.state.engineer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), ({ getCurrentUser, loadUserAlbums, filterAlbums }))(FiltersContainer)
