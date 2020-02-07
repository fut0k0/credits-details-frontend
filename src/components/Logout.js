import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/userActions";

const Logout = ({ logout, history }) => <button onClick={() => logout(history)}>Log out</button>

export default connect(null, { logout })(Logout)
