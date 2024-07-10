import { GlobalConfig } from "payload";
import link from "@cms/fields/link";

export const Footer: GlobalConfig = {
	slug: "footer",
	fields: [
		{
			name: "columns",
			type: "array",
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					type: "text",
					required: true,
					name: "label",
				},
				{
					name: "navItems",
					type: "array",
					fields: [
						link({
							appearances: false,
						}),
					],
				},
			],
		},
	],
};
