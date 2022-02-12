import React from "react";
import classes from "./PageContainer.module.scss";

export default function PageContainer({ children }) {
	return <div className={classes.container}>{children}</div>;
}
