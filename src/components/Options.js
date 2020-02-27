import React from "react"

// take in array of objects & return set of options for <select> element
const Options = data => {
	// sort data by name
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

export default Options
