import React from "react";
import Link from "next/link";
import { FiMenu, FiGrid } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import styles from "../styles/components/header.module.css";

export default function Header() {
	const [session] = useSession();
	const router = useRouter();

	return (
		<header className={styles.container}>
			<div className={styles.menuContainer}>
				<button type="button">
					<FiMenu />
				</button>
				<ul>
					<li
						className={`${
							router.pathname === "/" ? styles.active : ""
						} hidden-sm`}
					>
						<Link href="/">
							<a>Todas</a>
						</Link>
					</li>
					<li className="show-sm">Gmail</li>
					<li
						className={router.pathname.includes("/imghp") ? styles.active : ""}
					>
						<Link href="/imghp">
							<a>Imagens</a>
						</Link>
					</li>
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
