import React from "react";
import { connect } from "react-redux";
import { loadUserAlbums, filterAlbums } from "../actions/albumsActions";
import Filter from "../components/Filter";

class FiltersContainer extends React.Component {

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

	componentDidMount() {
		this.props.loadUserAlbums(this.props.currentUser.albums)
	}

	componentDidUpdate() {
		this.props.loadUserAlbums(this.props.currentUser.albums);
		this.props.filterAlbums(this.state);
	}

	render() {
		return (
			<div>
				Filters<br /><br />
				<Filter
					item={"artist"}
					data={this.props.currentUser.artists}
					value={this.state.artist_id}
					onChange={this.handleChange} />
				<Filter
					item={"year"}
					data={this.props.currentUser.years}
					value={this.state.year_id}
					onChange={this.handleChange} />
				<Filter
					item={"genre"}
					data={this.props.currentUser.genres}
					value={this.state.genre_id}
					onChange={this.handleChange} />
				<Filter
					item={"producer"}
					data={this.props.currentUser.producers}
					value={this.state.producer_id}
					onChange={this.handleChange} />
				<Filter
					item={"mixer"}
					data={this.props.currentUser.mixers}
					value={this.state.mixer_id}
					onChange={this.handleChange} />
				<Filter
					item={"engineer"}
					data={this.props.currentUser.engineers}
					value={this.state.engineer_id}
					onChange={this.handleChange} />
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), ({ loadUserAlbums, filterAlbums }))(FiltersContainer)

// possibly update other filters with relevant data once a filter is set
// create local state to update artists, years, genres, etc. (every field for which there is a filter)
// could possibly do it with something like local state = artistFilter = ***, yearFilter = ***, etc.
// then update the local state based on the filter settings so that all other filters can update with the relevant values
// send the updated data to each filter component