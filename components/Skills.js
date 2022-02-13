// import ChartComponent from "./ChartComponent";
import classes from "./skills.module.scss";

export default function Skills({ skills }) {
	return (
		<div>
			<h1>SKILLS</h1>
			<h1>I have used and am experieced in these technologies: </h1>{" "}
			<ul>
				{skills.map((skill) => {
					return <li key={skill.label}>{skill.label}</li>;
				})}
			</ul>
			{/* <ChartComponent data={skills} /> */}
		</div>
	);
}
