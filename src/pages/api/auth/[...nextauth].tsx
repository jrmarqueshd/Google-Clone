import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";

const options = {
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	database: process.env.DATABASE_URL,
	secret: process.env.SECRET,
	session: {
		jwt: true,
	},
	jwt: {},
	pages: {},
	callbacks: {},
	events: {},
	debug: false,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
	NextAuth(req, res, options);
