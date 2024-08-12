import type { Item, PayloadMenuItem } from "./type";
import type { BasePayload } from "payload";
import getPayload from "@/lib/payload";

import { Menu as MenuType } from "@/payload/payload-types";

async function parseItem(
	item: PayloadMenuItem,
	payload: BasePayload
): Promise<Item | null> {
	const { link } = item;

	// checking for the TS warning
	if (!link || !("type" in link)) return null;

	// get the type of link fields
	const { type } = link;
	switch (type) {
		// external link
		case "custom": {
			const { label: title, url } = link as {
				label: string;
				url: string;
			};
			return {
				title,
				url,
				isOpenInNewTab: link["new-tab"] as boolean,
			};
		}

		// internal link
		case "reference": {
			if (!link[type] || !("value" in link[type])) return null;
			let { value } = link[type];

			// check type of value
			if (typeof value !== "object") {
				value = await payload.findByID({
					collection: "pages",
					id: value,
				});
			}

			const { title, slug: url } = value as { title: string; slug: string };

			return {
				title,
				url,
				isOpenInNewTab: link["new-tab"] as boolean,
			};
		}

		// custom menu
		case "menu": {
			if (!link[type] || !("value" in link[type])) return null;
			let { value } = link[type];

			if (typeof value === "string") {
				value = await payload.findByID({
					collection: "menu",
					id: value,
				});
			}

			const { title } = value as { title: string };
			const items =
				(value as MenuType)["navItems"]?.map((item) =>
					parseItem(item, payload)
				) || [];
			const parsedItems = (await Promise.all(items)).filter(Boolean);
			return {
				title,
				url: "#",
				isOpenInNewTab: null,
				menu: parsedItems as Item[],
			};
		}

		default: {
			return null;
		}
	}
}

export default async function getMenuItems() {
	// get payload instance
	const payload = await getPayload();
	const { navItems } = await payload.findGlobal({
		slug: "header",
	});

	const items = navItems?.map((item) => parseItem(item, payload)) || [];
	const parsedItems = await Promise.all(items);
	return parsedItems;
}
