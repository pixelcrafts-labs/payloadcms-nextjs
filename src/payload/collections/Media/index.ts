import type { CollectionConfig } from "payload";
import getFileName from "@cms/utilities/getFileName";

export const Media: CollectionConfig = {
	slug: "media",
	admin: {},

	fields: [
		{
			name: "alt",
			type: "text",
			hooks: {
				beforeValidate: [
					({ data, value }) => {
						if (value) return value;
						return getFileName(data?.filename);
					},
				],
			},
		},
		{
			name: "caption",
			type: "text",
		},
	],
	upload: true,
};
