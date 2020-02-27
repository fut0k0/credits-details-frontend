import React from "react";
import Options from "./Options";

// return controlled <select> element with options based on "data" prop
const AlbumFormItem = ({ onChange, item, value, data }) => (
	<div>
		<label>
			{item[0].toUpperCase() + item.substring(1) + ": "}
			<select
				name={item === "format" ? item : item + "_id"}
				value={value}
				onChange={onChange}>
				<option key="default" value="" hidden={true}>(select value)</option>
				{Options(data)}
			</select>
		</label>
	</div>
)

export default AlbumFormItem
