import React from "react";
import { connect } from "react-redux";

class AddAlbum extends React.PureComponent {

	render() {
		return (
			<div>
				AddAlbum
			</div>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }))(AddAlbum)
