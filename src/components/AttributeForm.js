import React from "react"

const AttributeForm = props => (
	<div>
		<form onSubmit={event => {props.onSubmit(event, props.attribute)}}>
			<label>
				{props.attribute[0].toUpperCase() + props.attribute.substring(1) + ": "}
				<input
					type="text"
					name={props.attribute}
					placeholder="(enter name)" 
					value={props.value}
					onChange={props.onChange} />
			</label>{" "}
			{props.value ? <input type="submit" /> : <input type="submit" disabled="disabled" />}
		</form>
	</div>
)

export default AttributeForm
