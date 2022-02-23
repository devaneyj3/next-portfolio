import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = ({ resumeData }) => {
	useEffect(() => {
		jarallaxContent();
	}, []);

	const { education, work } = resumeData.resume;
	return (
		<div className="aali_tm_section">
			<div className="aali_tm_resume">
				<div className="content">
					<div className="container">
						<div className="resume_in">
							<div
								className="aali_tm_main_title"
								data-text-align="left"
								data-color="dark">
								<span>Know More</span>
								<h3>My Resume</h3>
								<p>
									I enjoy every step of the design process, from discussion and
									collaboration to concept and execution
								</p>
							</div>
							<div className="content_inner">
								<ul>
									<li className="wow fadeInLeft" data-wow-duration="1s">
										<h3 className="main_title">
											<span>Education</span>
										</h3>
										<ul className="list">
											{education.map((ed, i) => {
												const { degree, description, graduated, school } = ed;
												return (
													<li key={i}>
														<div className="list_inner">
															<span className="icon">{edu}</span>
															<div className="info">
																<div className="left">
																	<h3>{degree}</h3>
																	<span>{school}</span>
																</div>
																<div className="right">
																	<span>{graduated}</span>
																</div>
															</div>
															<div className="text">
																<p>{description}</p>
															</div>
														</div>
													</li>
												);
											})}
										</ul>
									</li>
									<li className="wow fadeInRight" data-wow-duration="1s">
										<h3 className="main_title">
											<span>Experience</span>
										</h3>
										<ul className="list">
											{work.map((job, i) => {
												const { company, title, years, description } = job;
												return (
													<div key={i}>
														<div className="list_inner">
															<span className="icon">{exp}</span>
															<div className="info">
																<div className="left">
																	<h3>{title}</h3>
																	<span>{company}</span>
																</div>
																<div className="right">
																	<span>{years}</span>
																</div>
															</div>
															<div className="text">
																{description.map((detail, i) => {
																	return <li key={i}>{detail}</li>;
																})}
															</div>
														</div>
													</div>
												);
											})}
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
