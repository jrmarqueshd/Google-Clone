import { useContext, useEffect } from "react";
import Input from "../components/input";
import { SearchContext } from "../context/searchContext";

import styles from "../styles/home.module.css";

export default function Home() {
	const { handleSubmit, setValue, value } = useContext(SearchContext);

	useEffect(() => {
		setValue("");
	}, []);

	return (
		<div className={styles.container}>
			<main>
				<img src="/images/logo.png" alt="Google" />

				<Input
					handleSubmit={handleSubmit}
					setValue={setValue}
					value={value}
					fixedOnFocus
				/>

				<div className={`${styles.buttonsContainer} show-sm`}>
					<button type="button" onClick={handleSubmit}>
						Pesquisa Google
					</button>
					<button type="button">Estou com sorte</button>
				</div>
			</main>
		</div>
	);
}
