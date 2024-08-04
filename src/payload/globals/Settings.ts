import { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	fields: [
		{
			name: "default",
			label: "Default page",
			type: "relationship",
			relationTo: "pages",
			required: true,
		},
		{
			name: "error",
			label: "Error page",
			type: "relationship",
			relationTo: "pages",
			required: true,
		},
		{
			name: "notFound",
			label: "Not found page",
			type: "relationship",
			relationTo: "pages",
			required: true,
		},
	],
};
