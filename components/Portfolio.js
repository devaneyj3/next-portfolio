import React, { useState } from "react";
import Card from "./Card";
import CustomButton from "./CustomButton";
import classes from "./portfolio.module.scss";

export default function Portfolio({ data }) {
	const [projects, setProjects] = useState(data.portfolio.projects);
	const categories = [
		...new Set(data.portfolio.projects.map((portfolio) => portfolio.category)),
	];
	const filterCategory = (category) => {
		const newProjects = data.portfolio.projects.filter(
			(c) => c.category === category
		);
		console.log(newProjects);
		setProjects(newProjects);
	};
	return (
		<div className={classes.portfolio}>
			<h1>Portfolio</h1>
			{categories.map((category) => (
				<CustomButton onClick={() => filterCategory(category)} key={category}>
					{category}
				</CustomButton>
			))}
			<Card portfolioData={projects} />
		</div>
	);
}
