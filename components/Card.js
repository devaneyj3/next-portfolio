import Image from "next/image";
import React from "react";
import classes from "./card.module.scss";

export default function Card({ portfolioData }) {
	return (
		<div className={classes.card_container}>
			{portfolioData.map((project, i) => {
				return (
					<div key={i} className={classes.card}>
						<Image
							src={`/images/portfolio/${project.image}`}
							alt={project.name}
							width={100}
							height={100}
						/>
						<h1>{project.title}</h1>
						<p>{project.description}</p>
					</div>
				);
			})}
		</div>
	);
}
