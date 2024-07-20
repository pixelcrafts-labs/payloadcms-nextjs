import { GlobalConfig } from "payload";
import link from "@cms/fields/link";

export const Header: GlobalConfig = {
	slug: "header",
	fields: [
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
};
