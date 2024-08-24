import type { CollectionConfig } from "payload";

import { slugField } from "@cms/fields/slug";
import { publishedDateField } from "@cms/fields/published-date";

import { Content } from "@cms/blocks/Content";

export const Pages: CollectionConfig = {
	slug: "pages",

	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
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
		{
			name: "components",
			blocks: [Content],
			type: "blocks",
		},

		publishedDateField(),
		slugField(),
	],
};
