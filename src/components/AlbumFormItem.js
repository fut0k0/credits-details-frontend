import React from "react";
import ListOptions from "./ListOptions";

const AlbumFormItem = ({ onChange, item, value, data }) => (
	<label>
		{item[0].toUpperCase() + item.substring(1) + ": "}
		<select
			name={item === "format" ? item : item + "_id"}
			value={value}
			onChange={onChange}>
			<option key="default" value="" hidden={true}>(select value)</option>
			{ListOptions(data)}
		</select>
	</label>
)

export default AlbumFormItem
