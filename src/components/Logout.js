import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/userActions";

const Logout = ({ logout, history }) => <span onClick={() => logout(history)}>Log out.</span>

export default connect(null, { logout })(Logout)
