import { Accordion } from "@cms/blocks/Accordion";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",

	admin: {
		// useAsTitle: "title",
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
			required: true,
		},
	],
	versions: {
		drafts: true,
	},
};
