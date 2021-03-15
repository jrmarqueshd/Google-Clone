export default function textEllipsis(
	text: string,
	letterLimits: number = 9999,
	ellipsis: string = "..."
) {
	if (!text) return "";

	if (text.length <= letterLimits) return text;

	return text.slice(0, letterLimits).concat(ellipsis);
}
