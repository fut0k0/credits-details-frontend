import React from "react";
import Options from "./Options";

// return controlled <select> element with options based on "data" prop
const AlbumFormItem = ({ onChange, item, value, data }) => (
	<tr>
		<td>
			<label htmlFor={item === "format" ? item : item + "_id"}>
				{item[0].toUpperCase() + item.substring(1) + ":"}
			</label>
		</td>
		<td>
			<select
				id={item === "format" ? item : item + "_id"}
				name={item === "format" ? item : item + "_id"}
				value={value}
				onChange={onChange}>
				<option key="default" value="" hidden={true}>(select value)</option>
				{Options(data)}
			</select>
		</td>
	</tr>
)

export default AlbumFormItem
