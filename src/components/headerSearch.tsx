import React from "react";
import Link from "next/link";
import { FiMenu, FiGrid } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import styles from "../styles/components/header.module.css";
import Input from "./input";

export default function HeaderSearch() {
	const [session] = useSession();
	const router = useRouter();

	return (
		<header className={`${styles.container} ${styles.headerSearch}`}>
			<div className={styles.menuContainer}>
				<button type="button">
					<FiMenu />
				</button>
			</div>

			<div className={styles.logoWrapper}>
				<img src="/images/logo.png" alt="Google Clone" />
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
				<Input />
			</div>
		</header>
	);
}
