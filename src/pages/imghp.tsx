import Head from "next/head";
import Input from "../components/input";

import styles from "../styles/home.module.css";

export default function Home() {
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

				<Input imagesView hiddenRightIcons />
			</main>
		</div>
	);
}
