import React from "react";
import styles from "../styles/nav.module.css";
import CustomButton from "./CustomButton";

export default function Header({ data }) {
	const {
		name,
		occupation,
		description,
		social,
		address: { state },
	} = data;
	const blog = "https://thesoftwareaccelerator.com";
	const networks = social.map((network) => {
		return (
			<li key={network.name}>
				<a href={network.url}>
					<i className={network.className}></i>
				</a>
			</li>
		);
	});

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li>
						<a className="smoothscroll" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#resume">
							Resume
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							Works
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							Contact
						</a>
					</li>
					<li>
						<a href={blog} target="_blank" rel="noopener noreferrer">
							Blog
						</a>
					</li>
				</ul>
			</nav>

			<div className={styles.about}>
				<div className="banner-text">
					<h1 className={styles.headline}>I'm {name}.</h1>
					<h3 className={styles.headline_subheading}>
						I'm a {state} based {""}
						<span style={{ color: "white", fontWeight: "bold" }}>
							{occupation}
						</span>
						. {description}.
					</h3>
					<ul className="social">{networks}</ul>
				</div>
				<CustomButton className={styles.button} link={blog}>
					Read My Blog
				</CustomButton>
			</div>

			<p className="scrolldown">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle"></i>
				</a>
			</p>
		</header>
	);
}
