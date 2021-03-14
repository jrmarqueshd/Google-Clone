import { FiSearch, FiMic, FiArrowLeft } from "react-icons/fi";
import { FaKeyboard } from "react-icons/fa";

import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/components/input.module.css";
import { useState } from "react";

export default function Input() {
	const [isFocused, setIsFocused] = useState(false);
	const { width } = useWindowSize();

	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				{isFocused && width < 768 ? (
					<FiArrowLeft size={28} color="#4285f4" />
				) : (
					<FiSearch />
				)}

				<input
					type="text"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>

				<FaKeyboard className="show-sm" />
				<FiMic />
			</div>
		</div>
	);
}
