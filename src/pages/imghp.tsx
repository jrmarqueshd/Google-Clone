import Head from "next/head";
import { useContext } from "react";
import Input from "../components/input";
import { SearchContext } from "../context/searchContext";

import styles from "../styles/home.module.css";

export default function Home() {
	const { setValue, handleSubmit, value } = useContext(SearchContext);

	return (
		<div className={styles.container}>
			<Head>
				<title>Imagens Google Clone</title>
			</Head>

			<main>
				<div className={styles.logoWrapper}>
					<img src="/images/logo.png" alt="Google" />
					<div className={styles.imagesLabel}>Imagens</div>
				</div>

				<Input
					imagesView
					hiddenRightIcons
					handleSubmit={handleSubmit}
					setValue={setValue}
					value={value}
				/>
			</main>
		</div>
	);
}
