import { useRouter } from "next/router";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

import SearchMenu from "../../components/searchMenu";
import News from "../../components/news";

import mockNews from "../../data/news.json";

import styles from "../../styles/search.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import API from "../../services";

export default function SearchPage({ data }) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>{router?.query?.search} - Pesquisa Google</title>
			</Head>

			<SearchMenu />

			<div className={styles.newsWrapper}>
				<mark className={`${styles.amountResults} show-sm`}>
					Aproximadamente 210.000.000 resultados (0,43 segundos)
				</mark>
			</div>

			{data?.map((news) => (
				<News
					key={String(uuidv4())}
					isAds={news.ads}
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

export const getStaticPaths: GetStaticPaths = async () => {
	const statics = [
		"react",
		"javascript",
		"teste",
		"google",
		"online",
		"home",
		"next",
		"nextjs",
		"reactjs",
		"blog",
		"clone",
	];

	const paths = statics.map((path) => ({ params: { search: path } }));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	let data = [];

	try {
		const response = await API.get(
			`http://localhost:3000/api/search?search=${params.search}`
		);
		const _data = response?.data?.data || {};

		if (!_data) {
			return {
				notFound: true,
			};
		}

		data = [...mockNews, ..._data];
	} catch (error) {
		console.log("deu ruim");
	}

	return {
		props: {
			data,
		},
		revalidate: 99999999999,
	};
};
