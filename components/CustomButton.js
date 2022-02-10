import React from "react";
import classes from "./CustomButton.module.scss";

export default function CustomButton({ blog, children }) {
	return (
		<button className={classes.button}>
			<a href={blog} target="_blank" rel="noopener noreferrer">
				{children}
			</a>
		</button>
	);
}
