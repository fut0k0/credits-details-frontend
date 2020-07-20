import React from "react"

// validate controlled form data before enabling submit button
const loadSubmitButton = (attribute, value) => {
	const enabledButton = <input type="submit" />;
	const disabledButton = <input type="submit" disabled="disabled" />;
	
	if (!value) {
		return disabledButton
	} else if (attribute !== "year" ) {
		return enabledButton
	} else {
		return (parseInt(value, 10).toString().length === 4 ? enabledButton : disabledButton)
	}
}

// generate controlled form for adding an album attribute ("attribute" prop)
const AttributeForm = ({ onSubmit, onChange, attribute, value }) => (
	<form onSubmit={event => {onSubmit(event, attribute)}}>
		<table>
			<tbody>
				<tr>
					<td>
						<label htmlFor={attribute}>
							{attribute[0].toUpperCase() + attribute.substring(1) + ":"}
						</label>
					</td>
					<td>
						<input
							type="text"
							id={attribute}
							name={attribute}
							placeholder={attribute === "year" ? "(enter 4 digit year)" : "(enter name)"}
							value={value}
							onChange={onChange} />
					</td>
					<td>
						{loadSubmitButton(attribute, value)}
					</td>
				</tr>
			</tbody>
		</table>
	</form>
)

export default AttributeForm
