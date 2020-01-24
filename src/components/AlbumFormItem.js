import React from "react"

const listOptions = data => (
	data.map(datum => <option key={datum.id} value={datum.id}>{datum.name}</option>)
)

// try to get <option value="" defaultselected="true" hidden={true}>(select value)</option> to display as first item in array
// maybe try to add key to above statement (which works on its own)

const AlbumFormItem = ({ onChange, item, value, data }) => (
	<label>
		{item[0].toUpperCase() + item.substring(1) + ": "}
		<select
			name={item}
			value={value}
			onChange={onChange} >
			{listOptions(data)}
		</select>
	</label>
)

export default AlbumFormItem
