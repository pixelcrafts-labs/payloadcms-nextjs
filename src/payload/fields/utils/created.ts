import type { Field } from "payload";

export const created: Field = {
	name: "created-by",
	type: "text",

	access: {
		create: () => false,
		update: () => false,
	},
	hooks: {
		beforeChange: [
			({ req: { user }, operation, value }) => {
				if (operation === "create") return user?.email;
				return value;
			},
		],
	},
	admin: {
		position: "sidebar",
	},
};
