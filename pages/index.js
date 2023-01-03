import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alex | Frontend Developer</title>
				<meta name="portfolio" content="Portfolio" />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
