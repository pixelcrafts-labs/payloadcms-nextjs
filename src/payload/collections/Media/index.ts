import { created } from "@cms/fields/created";
import { modified } from "@cms/fields/modified";
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
