import React from "react";
import classes from "./education.module.scss";

export default function Education({ education }) {
	return (
		<div>
			<h1>EDUCATION</h1>
			<div className={classes.education_container}>
				<div className={classes.education}>
					{education.map((ed, i) => {
						const { degree, description, graduated, school } = ed;
						return (
							<section key={i}>
								<h1>{school}</h1>
								<p>
									{degree}
									<span>{graduated}</span>
								</p>
								<p>{description}</p>
							</section>
						);
					})}
				</div>
			</div>
		</div>
	);
}
