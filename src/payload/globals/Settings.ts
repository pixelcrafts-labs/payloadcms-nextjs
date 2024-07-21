import { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	fields: [
		{
			name: "default",
			label: "Default page",
			type: "relationship",
			relationTo: "pages",
		},
		{
			name: "blog",
			label: "Blog page",
			type: "relationship",
			relationTo: "pages",
		},
	],
};
