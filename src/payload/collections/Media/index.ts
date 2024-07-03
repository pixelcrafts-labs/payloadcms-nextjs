import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	admin: {},

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
	],
	upload: true,
};
