import React from "react"

const listOptions = data => {
	data.sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) {
			return -1
		} else if (nameA > nameB) {
			return 1
		} else {
			return 0
		}
	})

	return data.map(datum => <option key={datum.id} value={datum.id}>{datum.name}</option>)
}

const AlbumFormItem = ({ onChange, item, value, data }) => (
	<label>
		{item[0].toUpperCase() + item.substring(1) + ": "}
		<select
			name={item === "format" ? item : item + "_id"}
			value={value}
			onChange={onChange} >
			<option key="default" value="" hidden={true}>(select value)</option>
			{listOptions(data)}
		</select>
	</label>
)

export default AlbumFormItem

// check if it is okay to remove value in line 29, might not be needed
