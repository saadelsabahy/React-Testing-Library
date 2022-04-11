import { rest } from 'msw';

const user = {
	name: {
		first: 'Laith',
		last: 'Harb',
	},
	picture: {
		large: 'https://randomuser.me/api/portraits/men/59.jpg',
	},
	login: {
		username: 'ThePhonyGOAT',
	},
};
export const handers = [
	rest.get('https://randomuser.me/api', (req, res, ctx) => {
		const results = req.url.searchParams.get('results');
		if (!results) return res(ctx.status(400));
		return res(
			ctx.status(200),
			ctx.json({
				results: [...Array(5).fill(user)],
			})
		);
	}),
];
