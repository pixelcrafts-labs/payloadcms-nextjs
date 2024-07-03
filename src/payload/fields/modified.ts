import type { Field } from "payload";

export const modified: Field = {
	name: "last-modified",
	type: "text",

	access: {
		create: () => false,
		update: () => false,
	},
	hooks: {
		beforeChange: [
			({ req: { user } }) => {
				return user?.email;
			},
		],
	},
	admin: {
		position: "sidebar",
	},
};
