import { useRouter } from "next/router";
import React, { useState } from "react";

interface SearchProviderTypes {
	children: React.ReactNode;
}

interface SearchContextTypes {
	setValue: (p: string) => void;
	handleSubmit: (p: React.FormEvent) => void;
}

export const SearchContext = React.createContext({} as SearchContextTypes);

export function SearchProvider({ children }: SearchProviderTypes) {
	const [value, setValue] = useState("");
	const router = useRouter();

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		router.push({
			pathname: `/search/${value}`,
		});
	}

	return (
		<SearchContext.Provider value={{ setValue, handleSubmit }}>
			{children}
		</SearchContext.Provider>
	);
}
