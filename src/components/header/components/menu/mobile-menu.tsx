import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MenuBar from "./menu-bar";

export default function MobileMenu() {
	return (
		<>
			<Sheet>
				<SheetTrigger className="mobile-menu">
					<Button asChild variant={"outline"} size={"icon"}>
						<span>
							<Menu size={19} />
							<span className="sr-only">Open Mobile Menu</span>
						</span>
					</Button>
				</SheetTrigger>
				<SheetContent side={"menu"} className="overflow-auto">
					<SheetHeader>
						<SheetTitle>
							<div className="sr-only">Mobile Menu</div>
						</SheetTitle>
						<SheetDescription>
							<span className="sr-only">
								A mobile menu for navigating between each pages
							</span>
						</SheetDescription>
					</SheetHeader>
					<div className="mobile-menu">
						<MenuBar />
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}
