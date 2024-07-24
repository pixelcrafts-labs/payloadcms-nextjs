import getMenuItems from "./lib/parse-menu";

export default async function MenuBar() {
	const menuItems = await getMenuItems();
	return <>{menuItems}</>;
}
