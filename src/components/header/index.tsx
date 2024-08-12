import Image from "next/image";
import ColorModeSwitcher from "../ui/color-mode-switcher";
import Link from "next/link";

import getMenuElements from "./lib/get-menu-elements";
import type { Item as ItemType } from "./lib/type";

import MobileMenu from "./components/mobile-menu";
import DesktopMenu from "./components/desktop-menu";
import getMenuItems from "./lib/parse-menu";

import "./style.scss";

export default async function Header() {
	const menuItems = (await getMenuItems()) as ItemType[];
	const menuElements = getMenuElements(menuItems);

	return (
		<header className="fixed top-0 left-0 z-[9999] w-full bg-background flex justify-between items-center px-gap-container min-h-header-height shadow-sm transition-colors">
			<Link href={"/"} className="relative inline-block aspect-[300/68] w-20">
				<Image
					src="/vercel.svg"
					alt="header-logo"
					fill
					className="object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				/>
			</Link>
			<DesktopMenu menuItems={menuElements} />
			<div className="flex items-center gap-2">
				<ColorModeSwitcher />
				<MobileMenu menuItems={menuElements} />
			</div>
		</header>
	);
}
