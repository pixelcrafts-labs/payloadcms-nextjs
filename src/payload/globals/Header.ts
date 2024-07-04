import { GlobalConfig } from "payload";
import { link } from "@cms/fields/link";

export const Header: GlobalConfig = {
	slug: "header",
	fields: [
		{
			name: "navItems",
			fields: [link()],
			maxRows: 6,
			type: "array",
		},
	],
};
