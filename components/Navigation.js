import React from "react";
import styles from "./navigation.module.scss";
import {
	AiOutlineHome,
	AiOutlineProfile,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import { VscFile } from "react-icons/vsc";
import { BiBookContent, BiEnvelope } from "react-icons/bi";
import Image from "next/image";
import me from "../public/images/me.jpg";

export default function Navigation({ resumeData }) {
	const { social } = resumeData;
	return (
		<nav className={styles.navigation}>
			<div className={styles.nav_container}>
				<section className={styles.profile}>
					<Image src={me} alt="jordan" width={150} height={200} />
					<h1>Jordan Devaney</h1>
					<section className={styles.social}>
						{social.map((icon, i) => {
							return (
								<a key={i} href={icon.url} target="_blank" rel="noreferrer">
									{icon.icon}
								</a>
							);
						})}
					</section>
				</section>
				<ul className={styles.ul}>
					<li>
						<a className="smoothscroll" href="#home">
							<AiOutlineHome />
							<span>Home</span>
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							<AiOutlineProfile />
							<span>About</span>
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#resume">
							<VscFile />
							<span> Resume</span>
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							<BiBookContent />
							<span> Works</span>
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							<BiEnvelope />
							<span> Contact</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
