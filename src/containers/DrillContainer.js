import React from "react";
import FiltersContainer from "./FiltersContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";

const DrillContainer = () => (
	<>
		<FiltersContainer />
		<ShowAlbumsContainer drill={true} />
	</>
)

export default DrillContainer
