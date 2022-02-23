import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = () => {
	useEffect(() => {
		window.addEventListener("scroll", stickyNav);
		window.addEventListener("scroll", scroll_);
	});
	return (
		<div className="aali_tm_header">
			<div className="container">
				<div className="inner">
					<div className="logo"></div>
					<div className="menu">
						<ul className="anchor_nav">
							<li className="current">
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#portfolio">Portfolio</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
