import Image from "next/image";
import ColorModeSwitcher from "../ui/color-mode-switcher";
import Link from "next/link";
import getMenuItems from "./lib/parse-menu";

import "./header.scss";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default async function Header() {
	const menuItems = await getMenuItems();

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
			<div className="desktop-menu">{menuItems}</div>

			<div className="flex items-center gap-2">
				<ColorModeSwitcher />
				<div className="mobile-menu">
					<Sheet>
						<SheetTrigger>
							<Button asChild variant={"outline"} size={"icon"}>
								<span>
									<Menu size={19} />
									<span className="sr-only">Open Menu</span>
								</span>
							</Button>
						</SheetTrigger>
						<SheetContent side={"menu"} className="overflow-auto">
							<div>{menuItems}</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
