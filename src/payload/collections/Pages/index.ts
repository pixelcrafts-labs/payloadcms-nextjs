import type { CollectionConfig } from "payload";

import { slugField } from "@cms/fields/slug";
import { publishedDateField } from "@cms/fields/published-date";

import { Accordion } from "@cms/blocks/Accordion";
import { Content } from "@cms/blocks/Content";
import { ImageContent } from "@cms/blocks/ImageContent";

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
			blocks: [Accordion, Content, ImageContent],
			type: "blocks",
			// required: true,
		},

		publishedDateField(),
		slugField(),
	],
};
