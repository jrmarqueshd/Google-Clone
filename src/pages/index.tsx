import { useContext } from "react";
import Input from "../components/input";
import { SearchContext } from "../context/searchContext";

import styles from "../styles/home.module.css";

export default function Home() {
	const { handleSubmit, setValue } = useContext(SearchContext);

	return (
		<div className={styles.container}>
			<main>
				<img src="/images/logo.png" alt="Google" />

				<Input handleSubmit={handleSubmit} setValue={setValue} fixedOnFocus />

				<div className={`${styles.buttonsContainer} show-sm`}>
					<button type="button">Pesquisa Google</button>
					<button type="button">Estou com sorte</button>
				</div>
			</main>
		</div>
	);
}
