import SearchMenu from "../../components/searchMenu";
import News from "../../components/news";

import styles from "../../styles/search.module.css";

export default function SearchPage() {
	return (
		<div className={styles.container}>
			<SearchMenu />

			<div className={styles.newsWrapper}>
				<mark className={`${styles.amountResults} show-sm`}>
					Aproximadamente 210.000.000 resultados (0,43 segundos)
				</mark>
			</div>

			<News />
			<News />
		</div>
	);
}
