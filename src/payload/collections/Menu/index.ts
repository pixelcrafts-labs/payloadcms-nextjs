import type { CollectionConfig } from "payload";
import link from "@cms/fields/link";

export const Menu: CollectionConfig = {
	slug: "menu",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "navItems",
			type: "array",
			fields: [link()],
		},
	],
};
