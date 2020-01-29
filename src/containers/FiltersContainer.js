import React from "react";
import { connect } from "react-redux";

const FiltersContainer = props => {
	console.log(props.currentUser.artists)

	return (
		<div>
			Filters<br /><br />
			<label>
				Artist:{" "}
				<select>
				</select>
			</label>
		</div>
	)
}

export default connect(({ currentUser }) => ({ currentUser }))(FiltersContainer)
