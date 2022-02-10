import React from "react";
import Card from "./Card";

export default function Portfolio({ data }) {
	return (
		<div>
			<Card portfolioData={data.portfolio.projects} />
		</div>
	);
}
