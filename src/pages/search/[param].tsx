import { useRouter } from "next/router";
import Head from "next/head";

import SearchMenu from "../../components/searchMenu";
import News from "../../components/news";

import mockNews from "../../data/news.json";

import styles from "../../styles/search.module.css";

export default function SearchPage({ data = mockNews }) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>{router?.query?.param} - Pesquisa Google</title>
			</Head>

			<SearchMenu />

			<div className={styles.newsWrapper}>
				<mark className={`${styles.amountResults} show-sm`}>
					Aproximadamente 210.000.000 resultados (0,43 segundos)
				</mark>
			</div>

			{data?.map((news, index) => (
				<News
					key={index + ""}
					title={news.title}
					description={news.description}
					link={news.link}
					tags={news.tags}
					lastVisit={news.lastVisit}
				/>
			))}
		</div>
	);
}
