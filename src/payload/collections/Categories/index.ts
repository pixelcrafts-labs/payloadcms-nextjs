import type { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
	],
	slug: "categories",
};

export default Categories;
