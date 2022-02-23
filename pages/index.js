import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
// import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
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
			{/* <Service resumeData={resumeData} /> */}
			<Resume resumeData={resumeData} />
			{/* <Testimonial resumeData={resumeData} />
			<Blog resumeData={resumeData} />
			<Counter resumeData={resumeData} /> */}
			<Contact resumeData={resumeData} />
		</Layout>
	);
};

export default Index;
