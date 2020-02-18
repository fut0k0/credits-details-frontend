import React from "react"

const loadSubmitButton = (attribute, value) => {
	const enabledButton = <input id="btn-sb" type="submit" />;
	const disabledButton = <input id="btn-sb" type="submit" disabled="disabled" />;
	
	if (!value) {
		return disabledButton
	} else if (attribute !== "year" ) {
		return enabledButton
	} else {
		return (parseInt(value, 10).toString().length === 4 ? enabledButton : disabledButton)
	}
}

const AttributeForm = ({ onSubmit, onChange, attribute, value }) => (
	<form onSubmit={event => {onSubmit(event, attribute)}}>
		<label>
			{attribute[0].toUpperCase() + attribute.substring(1) + ": "}
			<input
				type="text"
				name={attribute}
				placeholder={attribute === "year" ? "(enter 4 digit year)" : "(enter name)"}
				value={value}
				onChange={onChange} />
		</label>{" "}
		{loadSubmitButton(attribute, value)}
	</form>
)

export default AttributeForm
