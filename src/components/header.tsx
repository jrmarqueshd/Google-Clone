import React from "react";
import { FiMenu, FiGrid } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "../styles/components/header.module.css";

export default function Header() {
	const [session, loading] = useSession();

	return (
		<header className={styles.container}>
			<div className={styles.menuContainer}>
				<button type="button">
					<FiMenu />
				</button>
				<ul>
					<li className={`${true ? styles.active : ""} hidden-sm`}>Todas</li>
					<li className="show-sm">Gmail</li>
					<li className={false ? styles.active : ""}>Imagens</li>
				</ul>
			</div>
			<div className={styles.userContainer}>
				<button type="button">
					<FiGrid />
				</button>

				{!session ? (
					<button
						type="button"
						onClick={() => signIn("google")}
						className={styles.loginButton}
					>
						Fazer login
					</button>
				) : (
					<img
						src={session.user.image}
						onClick={() => signOut()}
						alt={session.user.name}
					/>
				)}
			</div>
		</header>
	);
}
