import { slugField } from "@cms/fields/slug";
import { Accordion } from "@cms/blocks/Accordion";
import type { CollectionConfig } from "payload";
import { publishedDateField } from "@/payload/fields/publishedDate";

export const Pages: CollectionConfig = {
	slug: "pages",

	admin: {
		useAsTitle: "title",
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
			blocks: [Accordion],
			type: "blocks",
			// required: true,
		},

		publishedDateField(),
		slugField(),
	],
};
