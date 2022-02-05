import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

import classes from "./about.module.scss";

export default function About({ data }) {
	const { image, name, phone, email, bio } = data;
	console.log(data);
	return (
		<div className={classes.about_container}>
			<section className={classes.img_container}>
				<Image src={image} alt={name} width="400" height="800" />
			</section>
			<section className={classes.info}>
				<aside>
					<h1>About Me</h1>
					<p>{bio}</p>
				</aside>
				<section className={classes.contact}>
					<aside>
						<h1>Contact Me:</h1>
						<p>{name}</p>
						<p>{phone}</p>
						<p>{email}</p>
					</aside>
					<div>
						<button className={classes.download_btn}>
							<FaDownload />
							{"  "}Download Resume
						</button>
					</div>
				</section>
			</section>
		</div>
	);
}
