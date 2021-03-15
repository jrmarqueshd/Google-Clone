import { useState } from "react";

import SearchMenu from "../../components/searchMenu";
import News from "../../components/news";

import mockNews from "../../data/news.json";

import styles from "../../styles/search.module.css";

export default function SearchPage({ data = mockNews }) {
	return (
		<div className={styles.container}>
			<SearchMenu />

			<div className={styles.newsWrapper}>
				<mark className={`${styles.amountResults} show-sm`}>
					Aproximadamente 210.000.000 resultados (0,43 segundos)
				</mark>
			</div>

			{data?.map((news, index) => (
				<News
					key={news.title + index}
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
