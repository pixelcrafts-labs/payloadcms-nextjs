import type { CollectionConfig } from "payload";

export const Menu: CollectionConfig = {
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
	],
	slug: "menu",
};
