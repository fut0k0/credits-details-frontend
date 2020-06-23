import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

class Login extends React.PureComponent {

	// track controlled form values
	state = {
		username: "",
		password: ""
	}

	// handle controlled form changes
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// handle controlled form submission
	handleSubmit = event => {
		event.preventDefault();
		this.props.login(this.state, this.props.history);
		// reset controlled form after submission
		this.setState({
			username: "",
			password: ""
		});
	}

	render() {
		return (
			<section>
				<h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="(enter username)"
						value={this.state.username}
						onChange={this.handleChange} />
					<input
						type="password"
						name="password"
						placeholder="(enter password)"
						value={this.state.password}
						onChange={this.handleChange} />
					{/* validate controlled form data before enabling submit button */}
					{this.state.username && this.state.password
						? <input type="submit" value="Go" /> : <input type="submit" value="Go" disabled="disabled" />}
				</form>
			</section>
		)
	}

}

export default connect(null, { login })(Login)
