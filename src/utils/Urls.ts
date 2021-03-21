export function ExtractBaseUrl(url: string) {
	let _url = new URL(url);

	return _url.origin;
}
