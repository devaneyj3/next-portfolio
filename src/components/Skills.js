import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = ({ resumeData }) => {
	useEffect(() => {
		window.addEventListener("scroll", activeSkillProgress);
	});
	const { skills, skillmessage } = resumeData.resume;
	return (
		<div className="aali_tm_section" id="portfolio">
			<div className="aali_tm_skills">
				<div className="container">
					<div className="skills_inner">
						<div className="left wow fadeInLeft" data-wow-duration="1s">
							<div
								className="aali_tm_main_title"
								data-text-align="left"
								data-color="light">
								<span>My Skills</span>
								<h3>
									You Can Imagine
									<br /> I Can Do
								</h3>
								<p>{skillmessage}</p>
							</div>
						</div>
						<div className="right wow fadeInRight" data-wow-duration="1s">
							<div className="dodo_progress">
								{skills.map((skill, i) => {
									return (
										<div
											key={i}
											className="progress_inner skillsInner___"
											data-value={skill.value}>
											<span>
												<span className="label">{skill.label}</span>
												<span className="number">{skill.value}</span>
											</span>
											<div className="background">
												<div className="bar">
													<div className="bar_in" />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<span
				className="border moving_effect"
				data-direction="x"
				data-reverse="yes"
			/>
		</div>
	);
};

export default Skills;
