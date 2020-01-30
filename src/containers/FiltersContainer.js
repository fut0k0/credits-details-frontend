import React from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter";

const FiltersContainer = ({ currentUser }) => {
	const handleChange = event => {
		let filteredAlbums = currentUser.albums

		if (!!event.target.value) {
			filteredAlbums = currentUser.albums.filter(album => album[event.target.name].id === parseInt(event.target.value))
		};
		console.log(filteredAlbums);
	}

	return (
		<div>
			Filters<br /><br />
			<Filter onChange={handleChange} item={"artist"} data={currentUser.artists} />
			<Filter onChange={handleChange} item={"year"} data={currentUser.years} />
		</div>
	)
}

export default connect(({ currentUser }) => ({ currentUser }))(FiltersContainer)

// store filtered albums in local state or store and send to Filter as data prop
// use if statement to check event.target.value and then update state
// then get result to ShowAlbums somehow, or make ShowFilteredAlbums component
// perhaps store filtered albums in store, then set flag in ShowAlbums render call and use conditions to all albums or filtered albums from store
// possibly update other filters with relevant data once a filter is set