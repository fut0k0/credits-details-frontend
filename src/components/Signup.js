import React from "react"

class Signup extends React.Component {

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

	render() {
		return (
			<div>
				Sign Up
				<form>
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
					<label>
						confirm password:{" "}
						<input
							type="password"
							name="passwordConfirm"
							placeholder="(re-enter password)"
							value={this.state.passwordConfirm}
							onChange={this.handleChange} />
					</label><br />
					{(this.state.password === this.state.passwordConfirm)
						? <input type="submit" /> : <input type="submit" disabled="disabled" />}
				</form>
			</div>
		)
	}

}

export default Signup


/*
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
*/
