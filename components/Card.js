import Image from "next/image";
import React from "react";
import classes from "./card.module.scss";

export default function Card({ portfolioData }) {
	console.log(portfolioData);
	return (
		<div className={classes.card_container}>
			{portfolioData.map((project, i) => {
				return (
					<div key={i} className={classes.card}>
						<h1>{project.title}</h1>
						<h1>{project.category}</h1>
					</div>
				);
			})}
		</div>
	);
}
