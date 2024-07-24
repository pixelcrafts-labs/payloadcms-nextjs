import Image from "next/image";
import ColorModeSwitcher from "../ui/color-mode-switcher";
import Link from "next/link";

import MobileMenu from "./components/menu/mobile-menu";
import DesktopMenu from "./components/menu/desktop-menu";

export default async function Header() {
	return (
		<header className="header w-full flex justify-between items-center px-5 min-h-header-height shadow-sm">
			<Link href={"/"} className="relative inline-block aspect-[300/68] w-20">
				<Image
					src="/vercel.svg"
					alt="header-logo"
					fill
					className="object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				/>
			</Link>
			<DesktopMenu />
			<div className="flex items-center gap-2">
				<ColorModeSwitcher />
				<MobileMenu />
			</div>
		</header>
	);
}
