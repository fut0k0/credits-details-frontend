import React from "react";
import { connect } from "react-redux";
import { loadUserAlbums, filterAlbums } from "../actions/albumsActions";
import Filter from "../components/Filter";

class FiltersContainer extends React.Component {

	state = {
		artist_id: "",
		year_id: ""
	}

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	componentDidUpdate() {
		this.props.loadUserAlbums(this.props.currentUser.albums);
		this.props.filterAlbums(this.state);
	}

	componentDidMount() {
		this.props.loadUserAlbums(this.props.currentUser.albums)
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