import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

import classes from "./about.module.scss";

export default function About({ data }) {
	const { image, name, phone, email, bio } = data;
	return (
		<div className={classes.about_container}>
			<section className={classes.img_container}></section>
			<section className={classes.info}>
				<aside>
					<h1>About</h1>
					<p>{bio}</p>
				</aside>
			</section>
		</div>
	);
}
