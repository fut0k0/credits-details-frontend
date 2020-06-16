import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/userActions";
import { setUserAlbums, filterAlbums } from "../actions/albumsActions";
import Filter from "../components/Filter";

class FiltersContainer extends React.PureComponent {

	// track current filter values
	state = {
		artist_id: "",
		year_id: "",
		genre_id: "",
		producer_id: "",
		mixer_id: "",
		engineer_id: ""
	}

	// handle filter change
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	// handle filer reset & clear all buttons
	handleClick = event => {
		if (event.target.name !== "all" ) {
			this.setState({[event.target.name]: ""})
		} else {
			this.setState({
				artist_id: "",
				year_id: "",
				genre_id: "",
				producer_id: "",
				mixer_id: "",
				engineer_id: ""
			})
		}
	}

	// check session for current user & load into store, load current user albums into store
	componentDidMount() {
		this.props.getCurrentUser();
		this.props.setUserAlbums(this.props.currentUser.albums);
	}

	// reset current user albums in store & run filters
	componentDidUpdate() {
		this.props.setUserAlbums(this.props.currentUser.albums);
		this.props.filterAlbums(this.state);
	}

	// use Filter component for each desired filter attribute
	render() {
		return (
			<section className="Filters">
				<Filter
					item={"artist"}
					data={this.props.currentUser.artists}
					value={this.state.artist_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"year"}
					data={this.props.currentUser.years}
					value={this.state.year_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"genre"}
					data={this.props.currentUser.genres}
					value={this.state.genre_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"producer"}
					data={this.props.currentUser.producers}
					value={this.state.producer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"mixer"}
					data={this.props.currentUser.mixers}
					value={this.state.mixer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<Filter
					item={"engineer"}
					data={this.props.currentUser.engineers}
					value={this.state.engineer_id}
					onChange={this.handleChange}
					onClick={this.handleClick} />
				<div id="div-cl">
					<button
						className="btn-cl"
						name="all"
						onClick={this.handleClick}>
						Clear All
					</button>
				</div>
			</section>
		)
	}

}

export default connect(({ currentUser }) => ({ currentUser }), ({ getCurrentUser, setUserAlbums, filterAlbums }))(FiltersContainer)
