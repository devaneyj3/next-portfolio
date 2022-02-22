import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.scss";
import Navigation from "./Navigation";

export default function Layout({ children, resumeData }) {
	return (
		<div className={classes.container}>
			<Navigation resumeData={resumeData} />
			<Header data={resumeData} />
			{children}
			<Footer />
		</div>
	);
}
