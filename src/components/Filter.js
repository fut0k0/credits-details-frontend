import React from "react";
import ListOptions from "./ListOptions";

const Filter = ({ onChange, item, value, data }) => (	
	<div>
		<label>
			{item[0].toUpperCase() + item.slice(1) + ": "}
			<select
				name={item + "_id"}
				value={value}
				onChange={onChange}>
				<option key="default" value="">(clear)</option>
				{ListOptions(data)}
			</select>
		</label>
	</div>
)

export default Filter
