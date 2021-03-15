import { IoIosArrowForward } from "react-icons/io";

import styles from "../styles/components/news.module.css";
import textEllipsis from "../utils/textEllipsis";

export default function News() {
	return (
		<article className={styles.container}>
			<header>
				<a href="#">
					<span>
						http://www.google.com.br <IoIosArrowForward /> ...
					</span>

					<h2>
						{textEllipsis(
							"Google Clone - Criando um layout quase parecido com o do Google",
							40
						)}
					</h2>
				</a>
			</header>

			<main>
				<p>
					{textEllipsis(
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis consequuntur possimus ut rem? Deleniti corporis sunt architecto quae, ratione vero sapiente optio. Non, quia totam. Aspernatur sunt omnis repudiandae.",
						125
					)}
				</p>
			</main>

			<footer>
				<div className={styles.tagsContainer}>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
					<a href="#">Teste</a>
				</div>

				<p className={styles.lastVisit}>
					Você visitou esta página em 16/09/20.
				</p>
			</footer>
		</article>
	);
}
