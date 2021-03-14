import { FiSearch, FiMic, FiArrowLeft, FiCamera } from "react-icons/fi";
import { FaKeyboard } from "react-icons/fa";

import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/components/input.module.css";
import React, { useState } from "react";

interface InputProps {
	imagesView?: boolean;
	fixedOnFocus?: boolean;
	hiddenRightIcons?: boolean;
}

export default function Input({
	imagesView,
	fixedOnFocus,
	hiddenRightIcons,
}: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const { width } = useWindowSize();

	return (
		<div className={`${styles.overlay} ${!fixedOnFocus ? "no-fix" : ""}`}>
			<div className={styles.container}>
				{isFocused && fixedOnFocus && width < 768 ? (
					<FiArrowLeft size={28} color="#4285f4" />
				) : (
					<FiSearch />
				)}

				<input
					type="text"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>

				<div
					className={`${styles.iconsContainer} ${
						hiddenRightIcons ? "show-sm" : ""
					}`}
				>
					{imagesView && <FiCamera />}

					<FaKeyboard className="show-sm" />
					<FiMic />

					{imagesView && !isFocused && <FiSearch color="#4285f4" />}
				</div>
			</div>
		</div>
	);
}
