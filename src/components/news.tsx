import { IoIosArrowForward } from "react-icons/io";

import styles from "../styles/components/news.module.css";
import textEllipsis from "../utils/textEllipsis";

interface newsTypes {
	title: string;
	description: string;
	link: string;
	tags?: [tagsTypes] | null;
	lastVisit?: string;
}

interface tagsTypes {
	link?: string;
	label?: string;
}

export default function News({
	title,
	description,
	link,
	tags,
	lastVisit,
}: newsTypes) {
	return (
		<article className={styles.container}>
			<header>
				<a href="#">
					<span>
						{link} <IoIosArrowForward /> ...
					</span>

					<h2>{textEllipsis(title, 40)}</h2>
				</a>
			</header>

			<main>
				<p>{textEllipsis(description, 125)}</p>
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
