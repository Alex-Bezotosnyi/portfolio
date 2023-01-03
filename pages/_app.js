import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import { PT_Sans } from "@next/font/google";

import "../styles/globals.css";

const font = PT_Sans({
	weight: "400"
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider enableSystem={true} attribute="class">
				<Navbar />
				<main className={font.className}>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
}
