import Menu from "../components/menu";
import Item from "../components/menu-item";
import type { Item as ItemType } from "./type";

const getElement = (item: ItemType) => {
	const { title, url, isOpenInNewTab, menu } = item;

	// has menu
	if (menu && menu.length > 0) {
		const parsedItems = menu.map((item) => getElement(item));
		return <Menu items={parsedItems} isSubMenu={true} title={title} />;
	}
	return <Item title={title} url={url || ""} openInNewTab={!!isOpenInNewTab} />;
};

export default function getMenuElements(menuItems: ItemType[]) {
	const parsedItems = menuItems.map((item) => getElement(item));
	return <Menu items={parsedItems} />;
}
