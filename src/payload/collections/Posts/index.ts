import { slugField } from "@cms/fields/slug";
import type { CollectionConfig } from "payload";
import { publishedDateField } from "@/payload/fields/published-date";

export const Posts: CollectionConfig = {
	slug: "posts",

	admin: {
		useAsTitle: "title",
		group: "Blog",
	},
	versions: {
		drafts: true,
	},

	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},

		publishedDateField(),
		slugField(),
		{
			name: "categories",
			admin: {
				position: "sidebar",
			},
			hasMany: true,
			relationTo: "categories",
			type: "relationship",
		},
	],
};
