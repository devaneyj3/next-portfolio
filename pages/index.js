import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Footer from "../src/layouts/Footer";

import Resume from "../src/components/Resume";
import Skills from "../src/components/Skills";
import Layout from "../src/layouts/Layout";

import { resumeData } from "../public/resumeData";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
	ssr: false,
});

const Index = () => {
	return (
		<Layout resumeData={resumeData}>
			<Home resumeData={resumeData} />
			<About resumeData={resumeData} />
			<Skills resumeData={resumeData} />
			<Portfolio resumeData={resumeData} />
			<Resume resumeData={resumeData} />
			<Contact resumeData={resumeData} />
			<Footer social={resumeData.social} />
		</Layout>
	);
};

export default Index;
