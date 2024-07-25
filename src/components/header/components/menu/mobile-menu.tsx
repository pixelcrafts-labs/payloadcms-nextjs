import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MenuBar from "./menu-bar";

export default function MobileMenu() {
	return (
		<>
			<Button variant={"outline"} size={"icon"}>
				<Menu size={19} />
				<span className="sr-only">Open Mobile Menu</span>
			</Button>
		</>
	);
}
