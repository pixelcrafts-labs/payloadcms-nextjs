import { Accordion } from "@cms/blocks/Accordion";
import { created } from "@cms/fields/created";
import { modified } from "@cms/fields/modified";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",

	admin: {
		// useAsTitle: "title",
	},

	fields: [
		{
			name: "title",
			type: "richText",
			required: true,
		},
		{
			name: "components",
			blocks: [Accordion],
			type: "blocks",
			required: true,
		},
		{ ...created },
		{ ...modified },
	],
	versions: {
		drafts: true,
	},
};
