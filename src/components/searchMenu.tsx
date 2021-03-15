import { FiSearch, FiImage, FiVideo, FiMapPin } from "react-icons/fi";
import { BiNews, BiDotsVerticalRounded } from "react-icons/bi";

import styles from "../styles/components/searchMenu.module.css";

export default function SearchMenu() {
	return (
		<div className={styles.container}>
			<ul className={styles.menuContainer}>
				<li className={styles.active}>
					<FiSearch />
					Todas
				</li>
				<li>
					<BiNews />
					Notícias
				</li>
				<li>
					<FiImage />
					Imagens
				</li>
				<li>
					<FiVideo />
					Vídeos
				</li>
				<li>
					<FiMapPin />
					Maps
				</li>
				<li>
					<BiDotsVerticalRounded />
					Mais
				</li>
				<li>Configurações</li>
				<li>Ferramentas</li>
			</ul>
		</div>
	);
}
