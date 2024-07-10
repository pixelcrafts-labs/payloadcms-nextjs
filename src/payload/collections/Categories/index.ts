import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
	admin: {
		useAsTitle: "title",
		group: "Blog",
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
	],
	slug: "categories",
};
