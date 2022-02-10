import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.scss";

export default function Layout({ children, resumeData }) {
	return (
		<div className={classes.container}>
			<Header data={resumeData} />
			{children}
			<Footer />
		</div>
	);
}
