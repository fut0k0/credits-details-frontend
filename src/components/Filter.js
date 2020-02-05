import React from "react";
import { connect } from "react-redux";
import ListOptions from "./ListOptions";

const Filter = ({ albumsFiltered, onChange, item, value, data }) => {
	const itemIds = albumsFiltered.map(album => album[item].id)
	const items = data.filter(datum => itemIds.includes(datum.id))

	return (
		<div>
			<label>
				{item[0].toUpperCase() + item.substring(1) + ": "}
				<select
					name={item + "_id"}
					value={value}
					onChange={onChange}>
					<option key="default" value="">(clear)</option>
					{ListOptions(items)}
				</select>
			</label>
		</div>
	)
}

export default connect(({ albumsFiltered }) => ({ albumsFiltered }))(Filter)
