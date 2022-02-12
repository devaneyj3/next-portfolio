import React from "react";
import classes from "./resume.module.scss";

export default function Resume({ work }) {
	return (
		<>
			<h1>Work</h1>
			<div className={classes.work_container}>
				<div className={classes.work}>
					{work.map((job, i) => {
						const { company, title, years, description } = job;
						return (
							<section key={i}>
								<h1 className={classes.company}>{company}</h1>
								<p className={classes.title}>
									{title} | <span className={classes.years}>{years}</span>
								</p>
								{description.map((task, i) => {
									return (
										<ul key={i}>
											<li>{task}</li>
										</ul>
									);
								})}
							</section>
						);
					})}
				</div>
			</div>
		</>
	);
}
