import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/userActions";

class Signup extends React.PureComponent {

	// track controlled form values
	state = {
		username: "",
		password: "",
		passwordConfirm: ""
	}

	// handle controlled form changes
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// handle controlled form submission
	handleSubmit = event => {
		// format controlled form data for back end
		const userObj = {
			user: {
				username: this.state.username,
				password: this.state.password
			}
		}

		event.preventDefault();
		this.props.signup(userObj, this.props.history);
		// reset controlled form after submission
		this.setState({
			username: "",
			password: "",
			passwordConfirm: ""
		});
	}

	render() {
		return (
			<div>
				Sign Up<br /><br />
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="(enter username)"
						value={this.state.username}
						onChange={this.handleChange} /><br />
					<input
						type="password"
						name="password"
						placeholder="(enter password)"
						value={this.state.password}
						onChange={this.handleChange} /><br />
					<input
						type="password"
						name="passwordConfirm"
						placeholder="(re-enter password)"
						value={this.state.passwordConfirm}
						onChange={this.handleChange} /><br /><br />
					{/* validate controlled form data before enabling submit button */}
					{this.state.password === this.state.passwordConfirm && this.state.password
						&& this.state.username
						? <input className="input-btn" type="submit" /> : <input type="submit" disabled="disabled" />}
				</form>
			</div>
		)
	}

}

export default connect(null, { signup })(Signup)
