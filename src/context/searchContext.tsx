import { useRouter } from "next/router";
import React, { useState } from "react";

interface SearchProviderTypes {
	children: React.ReactNode;
}

interface SearchContextTypes {
	setValue: (p: string) => void;
	handleSubmit: (p: React.FormEvent) => void;
	value: string;
}

export const SearchContext = React.createContext({} as SearchContextTypes);

export function SearchProvider({ children }: SearchProviderTypes) {
	const [value, setValue] = useState("");
	const router = useRouter();

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		if (!value) return null;

		return router.push({
			pathname: `/search/${value}`,
		});
	}

	return (
		<SearchContext.Provider value={{ setValue, handleSubmit, value }}>
			{children}
		</SearchContext.Provider>
	);
}
