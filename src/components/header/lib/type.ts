import { Menu } from "@cms/payload-types";

export type Item = {
	url: string | null;
	title: string;
	isOpenInNewTab: boolean | null;
	menu?: Item[] | null;
};
export type PayloadMenuItem = NonNullable<Menu["navItems"]>[number];
