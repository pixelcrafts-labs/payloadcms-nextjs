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
		{
			name: "created-by",
			type: "text",

			access: {
				create: () => false,
				update: () => false,
			},
			hooks: {
				beforeChange: [
					({ req: { user }, operation, value }) => {
						if (operation === "create") return user?.email;
						return value;
					},
				],
			},
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "last-modified",
			type: "text",

			access: {
				create: () => false,
				update: () => false,
			},
			hooks: {
				beforeChange: [
					({ req: { user } }) => {
						return user?.email;
					},
				],
			},
			admin: {
				position: "sidebar",
			},
		},
	],
	upload: true,
};
