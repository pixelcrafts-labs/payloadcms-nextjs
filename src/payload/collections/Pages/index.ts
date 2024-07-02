import { created } from "@cms/fields/utils/created";
import { modified } from "@cms/fields/utils/modified";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",

	admin: {
		useAsTitle: "title",
	},

	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{ ...created },
		{ ...modified },
	],
	versions: {
		drafts: true,
	},
};
