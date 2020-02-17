import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/userActions";

class Signup extends React.PureComponent {

	state = {
		username: "",
		password: "",
		passwordConfirm: ""
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		const userObj = {
			user: {
				username: this.state.username,
				password: this.state.password
			}
		}

		event.preventDefault();
		this.props.signup(userObj, this.props.history);
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
					{this.state.password === this.state.passwordConfirm && this.state.password
						&& this.state.username
						? <input className="input-btn" type="submit" /> : <input type="submit" disabled="disabled" />}
				</form>
			</div>
		)
	}

}

export default connect(null, { signup })(Signup)
