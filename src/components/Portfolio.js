import { useState } from "react";
import Card from "./Card";

const Portfolio = ({ resumeData }) => {
	const [projects, setProjects] = useState(resumeData.portfolio.projects);
	const categories = [
		"All",
		...new Set(
			resumeData.portfolio.projects.map((portfolio) => portfolio.category)
		),
	];

	const filterCategory = (category) => {
		if (category === "All") {
			setProjects(resumeData.portfolio.projects);
			return;
		}
		const newProjects = resumeData.portfolio.projects.filter(
			(c) => c.category === category
		);
		setProjects(newProjects);
	};
	return (
		<div className="aali_tm_section help" id="portfolio">
			<div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
				<div className="container">
					<div
						className="aali_tm_main_title"
						data-text-align="center"
						data-color="dark">
						<span>Selected works</span>
						<h3>Check my portfolio</h3>
					</div>
					<div className="portfolio_filter">
						<ul>
							{categories.map((category) => {
								return (
									<li key={category}>
										<a onClick={() => filterCategory(category)}>{category}</a>
									</li>
								);
							})}
						</ul>
					</div>

					<p>Displaying {projects.length} projects</p>
					<Card portfolioData={projects} />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
