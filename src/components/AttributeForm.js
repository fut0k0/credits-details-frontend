import React from "react"

const loadSubmitButton = props => {
	const enabledButton = <input type="submit" />;
	const disabledButton = <input type="submit" disabled="disabled" />;
	
	if (!props.value) {
		return disabledButton
	} else if (props.attribute !== "year" ) {
		return enabledButton
	} else {
		return (parseInt(props.value, 10).toString().length === 4 ? enabledButton : disabledButton)
	}
}

const AttributeForm = props => (
	<div>
		<form onSubmit={event => {props.onSubmit(event, props.attribute)}}>
			<label>
				{props.attribute[0].toUpperCase() + props.attribute.substring(1) + ": "}
				<input
					type="text"
					name={props.attribute}
					placeholder={props.attribute === "year" ? "(enter 4 digit year)" : "(enter name)"}
					value={props.value}
					onChange={props.onChange} />
			</label>{" "}
			{loadSubmitButton(props)}
		</form>
	</div>
)

export default AttributeForm
