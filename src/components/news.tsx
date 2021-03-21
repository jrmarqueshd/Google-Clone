import { IoIosArrowForward } from "react-icons/io";

import styles from "../styles/components/news.module.css";
import textEllipsis from "../utils/textEllipsis";
import { ExtractBaseUrl } from "../utils/Urls";

interface newsTypes {
	key: string;
	title: string;
	description: string;
	link: string;
	tags?: [tagsTypes] | null;
	lastVisit?: string;
	isAds: boolean;
}

interface tagsTypes {
	link?: string;
	label?: string;
}

export default function News({
	key,
	title,
	description,
	link,
	tags,
	lastVisit,
	isAds,
}: newsTypes) {
	return (
		<article key={key} className={styles.container}>
			<header>
				<a href="#">
					<span>
						{isAds && <strong>Anúncio ·</strong>}
						{ExtractBaseUrl(link)} <IoIosArrowForward /> ...
					</span>

					<h2 dangerouslySetInnerHTML={{ __html: textEllipsis(title, 40) }} />
				</a>
			</header>

			<main>
				<p
					dangerouslySetInnerHTML={{ __html: textEllipsis(description, 125) }}
				/>
			</main>

			<footer>
				<div className={styles.tagsContainer}>
					{tags?.map((tag) => (
						<a href={tag.link}>{tag.label}</a>
					))}
				</div>

				{lastVisit && (
					<p className={styles.lastVisit}>
						Você visitou esta página em {lastVisit}.
					</p>
				)}
			</footer>
		</article>
	);
}
