import Head from "next/head";

import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import { resumeData } from "../public/resumeData";
import Layout from "../components/layout";
import PageContainer from "../components/PageContainer";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout resumeData={resumeData}>
				<PageContainer>
					<About data={resumeData} />
				</PageContainer>
				<PageContainer>
					<Portfolio data={resumeData} />
				</PageContainer>
				<PageContainer>
					<Resume work={resumeData.resume.work} />
				</PageContainer>
				<PageContainer>
					<Education education={resumeData.resume.education} />
				</PageContainer>
				<PageContainer>
					<Skills />
				</PageContainer>
				<PageContainer>
					<Contact data={resumeData} />
				</PageContainer>
			</Layout>
		</div>
	);
}
