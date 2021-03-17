import React, { useEffect, useState } from "react";
import { FiSearch, FiMic, FiArrowLeft, FiCamera } from "react-icons/fi";
import { FaKeyboard } from "react-icons/fa";
import { useRouter } from "next/router";

import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/components/input.module.css";

interface InputProps {
	imagesView?: boolean;
	fixedOnFocus?: boolean;
	hiddenRightIcons?: boolean;
	value: string;
	setValue: (p: string) => void;
	handleSubmit: (p: React.FormEvent) => void;
}

export default function Input({
	imagesView,
	fixedOnFocus,
	hiddenRightIcons,
	value,
	setValue,
	handleSubmit,
}: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const { width } = useWindowSize();

	function handleChange(e) {
		setValue(e.target.value);
	}

	return (
		<div className={`${styles.overlay} ${!fixedOnFocus ? "no-fix" : ""}`}>
			<form onSubmit={handleSubmit} className={styles.container}>
				{isFocused && fixedOnFocus && width < 768 ? (
					<FiArrowLeft size={28} color="#4285f4" />
				) : (
					<FiSearch />
				)}
				<input
					type="text"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChange={handleChange}
					defaultValue={value}
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
			</form>
		</div>
	);
}
