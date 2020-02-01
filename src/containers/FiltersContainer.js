import React from "react";
import { connect } from "react-redux";
import { loadUserAlbums, filterAlbums } from "../actions/albumsActions";
import Filter from "../components/Filter";

class FiltersContainer extends React.Component {

	handleChange = event => {
		this.props.loadUserAlbums(this.props.currentUser.albums);
		if (!!event.target.value) {
			this.props.filterAlbums(event.target.name, event.target.value)
		};
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
					onChange={this.handleChange} />
				<Filter
					item={"year"}
					data={this.props.currentUser.years}
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