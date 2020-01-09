import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/currentUserActions";

class Login extends React.Component {

	state = {
		username: "",
		password: ""
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.login(this.state);
		this.setState({
			username: "",
			password: ""
		})
	}

	render() {
		return (
			<div>
				Login
				<form onSubmit={this.handleSubmit}>
					<label>
						username:{" "}
						<input
							type="text"
							name="username"
							placeholder="(enter username)"
							value={this.state.username}
							onChange={this.handleChange} />
					</label><br />
					<label>
						password:{" "}
						<input
							type="password"
							name="password"
							placeholder="(enter password)"
							value={this.state.password}
							onChange={this.handleChange} />
					</label><br />
					<input type="submit" />
				</form>
			</div>
		)
	}

}

export default connect(null, { login })(Login)
