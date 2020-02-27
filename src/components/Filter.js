import React from "react";
import { connect } from "react-redux";
import Options from "./Options";

// generate filter for an album attribute ("item" prop)
const Filter = ({ albumsFiltered, onChange, onClick, item, value, data }) => {
	// create array of item ids from albumsFiltered dataset
	const itemIds = albumsFiltered.map(album => album[item].id)
	// using item ids, create array of relevant or "matched" items from larger dataset
	const items = data.filter(datum => itemIds.includes(datum.id))

	// return controlled <select> element with relevant or "matched" items as options
	return (
		<div>
			<label>
				{item[0].toUpperCase() + item.substring(1) + ": "}
				<select
					name={item + "_id"}
					value={value}
					onChange={onChange}>
					<option key="default" value="" hidden={true}>(select)</option>
					{Options(items)}
				</select>
			</label>{" "}
			<button
				className="btn-rs"
				name={item + "_id"}
				onClick={onClick}>
				Reset
			</button>
		</div>
	)
}

export default connect(({ albumsFiltered }) => ({ albumsFiltered }))(Filter)
