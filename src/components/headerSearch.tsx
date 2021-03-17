import React, { useContext } from "react";
import Link from "next/link";
import { FiMenu, FiGrid } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";
import { SearchContext } from "../context/searchContext";

import styles from "../styles/components/header.module.css";
import Input from "./input";

export default function HeaderSearch() {
	const { handleSubmit, setValue } = useContext(SearchContext);
	const [session] = useSession();

	return (
		<header className={`${styles.container} ${styles.headerSearch}`}>
			<div className={styles.menuContainer}>
				<button type="button">
					<FiMenu />
				</button>
			</div>

			<div className={styles.logoWrapper}>
				<Link href="/">
					<a>
						<img src="/images/logo.png" alt="Google Clone" />
					</a>
				</Link>
			</div>

			<div className={styles.userContainer}>
				<button style={{ marginLeft: "8px" }} className="show-sm" type="button">
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

			<div className={styles.inputWrapper}>
				<Input handleSubmit={handleSubmit} setValue={setValue} />
			</div>
		</header>
	);
}
