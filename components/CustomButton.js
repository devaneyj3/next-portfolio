import React from "react";
import classes from "./CustomButton.module.scss";

export default function CustomButton({ link, children, onClick }) {
	return (
		<button className={classes.button}>
			<a
				onClick={onClick}
				href={link}
				target="_blank"
				rel="noopener noreferrer">
				{children}
			</a>
		</button>
	);
}
