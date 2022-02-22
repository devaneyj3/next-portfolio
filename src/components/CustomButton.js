import React from "react";
import classes from "./CustomButton.module.scss";

export default function CustomButton({ link, customClass, children, onClick }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<button
				className={`${customClass ? classes.smallButton : classes.button}`}
				onClick={onClick}>
				{children}
			</button>
		</a>
	);
}
