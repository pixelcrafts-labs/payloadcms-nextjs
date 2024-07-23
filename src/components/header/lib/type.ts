import { Menu } from "@cms/payload-types";

export type Item = {
	url: string | null;
	title: string;
	menu?: Item[] | null;
};
export type PayloadMenuItem = NonNullable<Menu["navItems"]>[number];
