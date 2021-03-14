import { Provider } from "next-auth/client";
import Head from "next/head";

import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>Google Clone</title>
			</Head>

			<Header />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}

export default MyApp;
