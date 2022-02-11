import React, { useState } from "react";
import Card from "./Card";
import CustomButton from "./CustomButton";
import classes from "./portfolio.module.scss";

export default function Portfolio({ data }) {
	const [projects, setProjects] = useState(data.portfolio.projects);
	const categories = [
		"All",
		...new Set(data.portfolio.projects.map((portfolio) => portfolio.category)),
	];
	const filterCategory = (category) => {
		if (category === "All") {
			setProjects(data.portfolio.projects);
			return;
		}
		const newProjects = data.portfolio.projects.filter(
			(c) => c.category === category
		);
		setProjects(newProjects);
	};
	return (
		<div className={classes.portfolio_container}>
			<div className={classes.info}>
				<h1>Portfolio</h1>
				<p>Check out my latest work!</p>
				<p>Displaying {projects.length} projects</p>
				<div className={classes.btn_container}>
					{categories.map((category) => (
						<div className={classes.btn} key={category}>
							<CustomButton onClick={() => filterCategory(category)}>
								{category}
							</CustomButton>
						</div>
					))}
				</div>
			</div>
			<Card portfolioData={projects} />
		</div>
	);
}
