"use client";

import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
	menuItems: ReactNode;
};

export default function MobileMenu({ menuItems }: Props) {
	return (
		<Modal>
			<Modal.Trigger asChild>
				<Button variant={"outline"} size={"icon"} className="lg:hidden">
					<Menu size={19} />
					<span className="sr-only">Open Mobile Menu</span>
				</Button>
			</Modal.Trigger>
			<Modal.Container>
				<div className="pt-header-height">
					<div className="p-gap-container mobile-menu">{menuItems}</div>
				</div>
			</Modal.Container>
		</Modal>
	);
}
