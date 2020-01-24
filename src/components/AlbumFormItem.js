import React from "react"

const AlbumFormItem = props => {

	const fArray=[
		{id: 1, name: "(N/A)"},
		{id: 2, name: "cassette"},
		{id: 3, name: "disc"},
		{id: 4, name: "digital"},
		{id: 5, name: "other"},
		{id: 6, name: "stream"},
		{id: 7, name: "vinyl"},
	]

// try to get <option value="" defaultselected="true" hidden={true}>(select value)</option> to display as first item in array

	const listOptions = () => (
		fArray.map(datum => <option key={datum.id} value={datum.name}>{datum.name}</option>)
	)

	return (
		<div>
			<label>
				{props.item[0].toUpperCase() + props.item.substring(1) + ": "}
				<select
					name={props.item}
					value={props.value}
					onChange={props.onChange} >
					{listOptions()}
				</select>
			</label>
		</div>
	)

}

export default AlbumFormItem
