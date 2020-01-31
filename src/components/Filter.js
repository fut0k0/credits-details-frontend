import React from "react";
import ListOptions from "./ListOptions";

const Filter = ({ onChange, item, data }) => (	
	<div>
		<label>
			{item[0].toUpperCase() + item.substring(1) + ": "}
			<select
				name={item}
				onChange={onChange}>
				<option key="default" value="">(clear)</option>
				{ListOptions(data)}
			</select>
		</label>
	</div>
)

export default Filter