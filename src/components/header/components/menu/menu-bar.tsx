import getMenuItems from "../../lib/parse-menu";

import "./style.scss";

export default async function MenuBar() {
	const menuItems = await getMenuItems();
	return <>{menuItems}</>;
}
