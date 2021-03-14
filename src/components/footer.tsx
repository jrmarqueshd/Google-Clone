import React from "react";

import styles from "../styles/components/footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.countryContainer}>Brasil</div>
			<ul className={styles.menuContainer}>
				<li>Configurações</li>
				<li>Privacidade</li>
				<li>Termos</li>
				<li>Publicidade</li>
				<li>Negócios</li>
				<li>Sobre</li>
			</ul>
		</footer>
	);
}
