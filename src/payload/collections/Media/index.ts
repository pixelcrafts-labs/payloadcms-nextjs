import { created } from "@cms/fields/utils/created";
import { modified } from "@cms/fields/utils/modified";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",

	admin: {
		// defaultColumns: ["upload", "alt", "createdAt"],
	},

	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
		{
			name: "caption",
			type: "text",
		},
		{ ...created },
		{ ...modified },
	],
	upload: true,
};
