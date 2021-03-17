import { Provider } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../components/footer";
import Header from "../components/header";
import HeaderSearch from "../components/headerSearch";
import { SearchProvider } from "../context/searchContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<Provider session={pageProps.session}>
			<SearchProvider>
				<Head>
					<title>Google Clone</title>
				</Head>

				{router.pathname.includes("search") ? <HeaderSearch /> : <Header />}
				<Component {...pageProps} />
				<Footer />
			</SearchProvider>
		</Provider>
	);
}

export default MyApp;
