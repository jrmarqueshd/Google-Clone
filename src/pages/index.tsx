import Input from "../components/input";

import styles from "../styles/home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<main>
				<img src="/images/logo.png" alt="Google" />

				<Input />

				<div className={`${styles.buttonsContainer} show-sm`}>
					<button type="button">Pesquisa Google</button>
					<button type="button">Estou com sorte</button>
				</div>
			</main>
		</div>
	);
}
