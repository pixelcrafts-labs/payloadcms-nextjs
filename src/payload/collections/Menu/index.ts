import type { CollectionConfig } from "payload";

export const Menu: CollectionConfig = {
	admin: {
		useAsTitle: "title",
		group: "Menu",
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
	],
	slug: "menu",
};
