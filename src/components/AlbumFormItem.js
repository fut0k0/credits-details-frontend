import React from "react"

const listOptions = data => {
	let list = []

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

	list = data.map(datum => <option key={datum.id} value={datum.id}>{datum.name}</option>);
	list.unshift(<option key="default" value="" defaultselected="true" hidden={true}>(select value)</option>);
	return list;
}

const AlbumFormItem = ({ onChange, item, value, data }) => (
	<label>
		{item[0].toUpperCase() + item.substring(1) + ": "}
		<select
			name={item === "format" ? item : item + "_id"}
			value={value}
			onChange={onChange} >
			{listOptions(data)}
		</select>
	</label>
)

export default AlbumFormItem
