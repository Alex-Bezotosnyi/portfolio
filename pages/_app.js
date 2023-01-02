import {Poppins} from "@next/font/google"
import Navbar from "../components/Navbar";
import {ThemeProvider} from 'next-themes';
import '../styles/globals.css';

const poppins = Poppins({
    weight: "400",
})

export default function App({Component, pageProps}) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Navbar/>
                <main className={poppins.className}>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </>
    );
};