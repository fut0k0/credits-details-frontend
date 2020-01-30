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

const Filter = ({ onChange, item, data }) => {	
	return (
		<div>
			<label>
				{item[0].toUpperCase() + item.substring(1) + ": "}
				<select
					name={item}
					onChange={onChange}>
					<option key="default" value="">(clear)</option>
					{listOptions(data)}
				</select>
			</label>
		</div>
	)
}

export default Filter
