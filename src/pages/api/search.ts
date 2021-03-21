import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { search } = req.query;

		const response = await axios.get(
			`https://www.googleapis.com/customsearch/v1?key=AIzaSyBdKC1OjJ_Ln77ORkxZOxIDP6C6BR-eCWI&cx=591a88ec1bb4d2048&q=${search}`
		);

		const data = response?.data?.items?.map(
			({ htmlTitle, link, htmlSnippet }) => {
				return {
					title: htmlTitle,
					description: htmlSnippet,
					link,
					tags: null,
				};
			}
		);

		res.status(200).json({ search, data });
	} catch (err) {
		console.log(err.response);

		res.status(400).json({ data: null, message: "Falha na requisição" });
	}
};
