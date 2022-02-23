import Image from "next/image";
import CustomButton from "./CustomButton";
import React from "react";
import {
	CardGroup,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	Container,
	Row,
	Col,
} from "reactstrap";
import classes from "./card.module.scss";

export default function Cards({ portfolioData }) {
	return (
		<div className={classes.card_container}>
			{portfolioData.map((project, i) => {
				return (
					<Card className={classes.card} key={i}>
						<CardImg
							src={`/images/portfolio/${project.image}`}
							alt={project.name}
						/>
						<CardBody>
							<CardTitle tag="h5">{project.title}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								{project.description}
							</CardSubtitle>
							<CardText>{project.stack}</CardText>
							<section>
								<CustomButton customClass link={project.url}>
									See Live App
								</CustomButton>
								<CustomButton customClass link={project.github}>
									Source Code
								</CustomButton>
							</section>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
}
