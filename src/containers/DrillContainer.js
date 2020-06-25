import React from "react";
import FiltersContainer from "./FiltersContainer";
import ShowAlbumsContainer from "./ShowAlbumsContainer";

const DrillContainer = () => (
	<main className="Drill">
		<FiltersContainer />
		<ShowAlbumsContainer drill={true} />
	</main>
)

export default DrillContainer
