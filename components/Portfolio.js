import React from "react";
import { Button } from "reactstrap";
import Card from "./Card";
import classes from "./portfolio.module.scss";

export default function Portfolio({ data }) {
	const { projects } = data.portfolio;
	const categories = [
		...new Set(projects.map((portfolio) => portfolio.category)),
	];
	return (
		<div className={classes.portfolio}>
			<h1>Portfolio</h1>
			{categories.map((category) => (
				<Button color="info" key={category}>
					{category}
				</Button>
			))}
			<Card portfolioData={projects} />
		</div>
	);
}
